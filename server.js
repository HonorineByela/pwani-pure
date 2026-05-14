require("dotenv").config();

const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

/* MIDDLEWARE */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

/* RATE LIMITING */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

/* STATIC FILES */

app.use(express.static(__dirname));

/* HOMEPAGE */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* CSRF PROTECTION */

const csrfProtection = csrf({ cookie: true });

app.get("/api/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

/* ROLE SYSTEM */

const users = [
  {
    email: "admin@pwanipure.com",
    role: "admin"
  },
  {
    email: "customer@gmail.com",
    role: "customer"
  }
];

app.post("/api/check-role", (req, res) => {

  const user = users.find(
    u => u.email === req.body.email
  );

  if (!user) {
    return res.json({
      success: false
    });
  }

  res.json({
    success: true,
    role: user.role
  });
});

/* PRODUCT IMAGES */

app.post("/api/product-images", (req, res) => {

  res.json({
    success: true,
    message: "Multiple image upload ready"
  });
});

/* PRODUCT VARIANTS */

app.post("/api/product-variants", (req, res) => {

  res.json({
    success: true,
    variants: [
      "Size",
      "Color",
      "Material"
    ]
  });
});

/* STRIPE WEBHOOK */

app.post("/webhook/stripe", (req, res) => {
  console.log("Stripe webhook connected");
  res.sendStatus(200);
});

/* MOBILE PAYMENT */

app.post("/api/mobile-payment", (req, res) => {
  res.json({
    success: true,
    message: "Tanzania mobile payment integration ready"
  });
});

/* SERVER */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Pwani Pure running");
});