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
    api_key: "678b3c8530ac26982bfe541d",
    field: "python",
    geoid: "100293800",
    page: 1
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



// const axios = require('axios');

// // Define the URL and parameters
// const url = "https://api.scrapingdog.com/linkedinjobs/";
// const params = {
//   api_key: "678b3c8530ac26982bfe541d",
//   field: "python",
//   geoid: "100293800",
//   page: 5
// };

// // Send a GET request with the parameters
// let def = async () => {
//   try {
//     const response = await axios.get(url, { params });
//     console.log(response.data);
//   } catch (error) {
//     console.error("API Error:", error.message);
//     // console.log({ error: "Failed to fetch jobs" });
//   }
// }

// def();

