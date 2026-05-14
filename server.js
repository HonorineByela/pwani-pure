require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1 style="font-family:sans-serif;text-align:center;margin-top:100px;">
      Pwani Pure is Live ✨
    </h1>
  `);
});

module.exports = app;
