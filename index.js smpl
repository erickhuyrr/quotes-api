const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get("/api/quotes", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const url = `https://quotes.toscrape.com/page/${page}/`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(response.data);
    const quotes = [];

    $(".quote").each((_, el) => {
      quotes.push({
        text: $(el).find(".text").text().trim(),
        author: $(el).find(".author").text().trim(),
        tags: $(el)
          .find(".tag")
          .map((_, t) => $(t).text())
          .get(),
      });
    });

    if (quotes.length === 0) {
      return res.status(404).json({ error: "No quotes found" });
    }

    res.json({
      page: Number(page),
      total: quotes.length,
      quotes,
    });
  } catch (error) {
    res.status(500).json({
      error: "Scraping failed",
      message: error.message,
    });
  }
});

// Serve the frontend for all other routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 5000;
app.listen(port, '0.0.0.0', () =>
  console.log(`✅ Server running → http://0.0.0.0:${port}`)
);
