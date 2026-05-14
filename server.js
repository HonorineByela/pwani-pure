require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();

/* SECURITY */

app.use(helmet());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

/* BODY PARSER */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* STATIC FILES */

app.use(express.static(__dirname));

/* HOME PAGE */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* SERVER */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
