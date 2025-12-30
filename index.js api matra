const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

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

app.listen(3000, () =>
  console.log("✅ API running → http://localhost:3000/api/quotes")
);
