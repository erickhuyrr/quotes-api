const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static('public'));

// Serve replit.md as plain text
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120",
  "Accept-Language": "en-US,en;q=0.9",
};

let qotd = {
  quote: null,
  date: null
};

let cachedTags = null;
let tagsLastFetch = null;

app.get("/api/tags", async (req, res) => {
  try {
    // Return cached tags if fresher than 1 hour
    if (cachedTags && tagsLastFetch && Date.now() - tagsLastFetch < 3600000) {
      return res.json({ tags: cachedTags });
    }

    const response = await axios.get("https://www.goodreads.com/quotes", { headers: HEADERS });
    const $ = cheerio.load(response.data);
    const tags = new Set();

    // Fetch tags from main quotes page
    $(".quoteFooter .greyText a").each((_, el) => {
      const tag = $(el).text().trim();
      if (tag) tags.add(tag);
    });

    // Common quote tags to ensure we have a good list
    const defaultTags = ["love", "death", "inspiration", "life", "success", "motivation", "philosophy", "wisdom", "happiness", "fear", "hope", "friendship", "family", "courage", "truth", "beauty", "change"];
    defaultTags.forEach(tag => tags.add(tag));

    const tagsList = Array.from(tags).sort();
    cachedTags = tagsList;
    tagsLastFetch = Date.now();

    res.json({ tags: tagsList });
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ error: "Failed to fetch tags" });
  }
});

app.get("/api/qotd", async (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  
  if (qotd.date === today && qotd.quote) {
    return res.json(qotd.quote);
  }

  try {
    const response = await axios.get("https://www.goodreads.com/quotes", { headers: HEADERS });
    const $ = cheerio.load(response.data);
    const quotes = [];
    
    $(".quoteDetails").each((_, el) => {
      const text = $(el).find(".quoteText").text().trim().split("―")[0].trim().replace(/^"|"$/g, '');
      const author = $(el).find(".quoteText").find(".authorOrTitle").text().trim().replace(/,$/, '');
      const avatar = $(el).find("img").attr("src") || null;
      quotes.push({ text, author, avatar });
    });

    if (quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      qotd = { quote: randomQuote, date: today };
      res.json(randomQuote);
    } else {
      res.status(404).json({ error: "Could not fetch QOTD" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch QOTD" });
  }
});

app.get("/api/quotes", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const tag = req.query.tag && req.query.tag !== 'all' ? req.query.tag : '';
    const sort = req.query.sort || '';
    
    let url = tag 
      ? `https://www.goodreads.com/quotes/tag/${tag}?page=${page}&sort=original`
      : `https://www.goodreads.com/quotes?page=${page}`;

    if (sort === 'new') {
      url += `&v=${Date.now()}`; 
    }

    console.log(`Scraping Goodreads: ${url}`);
    const response = await axios.get(url, {
      headers: HEADERS,
      timeout: 15000,
    });

    const $ = cheerio.load(response.data);
    const quotes = [];

    let quoteCount = "Unknown";
    const countText = $(".leftContainer h1").text();
    const match = countText.match(/of ([\d,]+)/);
    if (match) {
      quoteCount = match[1];
    }

    $(".quoteDetails").each((_, el) => {
      const quoteText = $(el).find(".quoteText").text().trim();
      const parts = quoteText.split("―");
      const text = parts[0].trim().replace(/^"|"$/g, '');
      const author = parts[1] ? parts[1].split(",")[0].trim() : "Unknown";
      
      const avatar = $(el).find("img").attr("src") || null;
      const likesText = $(el).find(".smallText").text().trim();
      const likes = likesText.match(/\d+/) ? likesText.match(/\d+/)[0] : "0";
      const tags = $(el).find(".quoteFooter .greyText a").map((_, t) => $(t).text()).get();

      quotes.push({ text, author, likes, tags, avatar });
    });

    if (quotes.length === 0) {
      return res.status(404).json({ error: "No quotes found on Goodreads" });
    }

    res.json({
      source: "Goodreads",
      page: Number(page),
      total: quotes.length,
      quoteCount,
      quotes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Scraping Goodreads failed",
      message: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () =>
  console.log(`✅ Server running → http://0.0.0.0:${PORT}`)
);
