const express = require("express");
const cors = require("cors"); // Import cors
const { resolve } = require("path");
const axios = require("axios");

const app = express();
const port = 3010;

app.use(cors()); // Enable CORS
app.use(express.static("static"));

// LinkedIn Jobs API endpoint
app.get("/api/jobs", async (req, res) => {
  const url = "https://api.scrapingdog.com/linkedinjobs/";
  const params = {
    api_key: "671e0bb38c56531351652c7b",
    field: "python",
    geoid: "100293800",
    page: 1,
  };

  try {
    const response = await axios.get(url, { params });
    res.json(response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// Serve the main page
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
