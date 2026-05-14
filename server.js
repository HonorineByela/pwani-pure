require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
