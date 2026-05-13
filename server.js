require("dotenv").config();

const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

const app = express(); 

// HOMEPAGE
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Pwani Pure</title>

        <style>

          body{
            margin:0;
            font-family:Arial;
            background:black;
            color:white;
          }

          nav{
            display:flex;
            justify-content:space-between;
            padding:20px 40px;
            border-bottom:1px solid gold;
          }

          .logo{
            color:gold;
            font-size:28px;
            font-weight:bold;
          }

          .hero{
            height:90vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
          }

          h1{
            font-size:60px;
            color:gold;
          }

          p{
            font-size:20px;
            width:70%;
          }

          button{
            margin-top:20px;
            padding:15px 35px;
            border:none;
            background:gold;
            color:black;
            font-size:18px;
            cursor:pointer;
            border-radius:10px;
          }

          .products{
            padding:80px 40px;
          }

          .products h2{
            text-align:center;
            color:gold;
            margin-bottom:40px;
            font-size:40px;
          }

          .product-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
            gap:30px;
          }

          .card{
            background:#111;
            border:1px solid gold;
            border-radius:15px;
            overflow:hidden;
            text-align:center;
            padding-bottom:20px;
          }

          .card img{
            width:100%;
            height:300px;
            object-fit:cover;
          }

          .card h3{
            color:gold;
          }

          .card p{
            width:100%;
          }

        </style>
      </head>

      <body>

        <nav>
          <div class="logo">Pwani Pure</div>

          <div>
            Home |
            Shop |
            Skincare |
            Fashion
          </div>
        </nav>

        <section class="hero">

          <h1>Luxury Redefined</h1>

          <p>
            Discover premium skincare and fashion crafted
            for elegance, confidence, and timeless beauty.
          </p>

          <button>Shop Now</button>

        </section>

        <section class="products">

          <h2>Featured Collection</h2>

          <div class="product-grid">

            <div class="card">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" />
              <h3>Golden Glow Serum</h3>
              <p>$45</p>
            </div>

            <div class="card">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop" />
              <h3>Luxury Silk Dress</h3>
              <p>$120</p>
            </div>

            <div class="card">
              <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop" />
              <h3>Pure Essence Cream</h3>
              <p>$60</p>
            </div>

          </div>

        </section>

      </body>
    </html>
  `);
});

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

// RATE LIMITING
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

// CSRF PROTECTION
const csrfProtection = csrf({ cookie: true });

app.get("/api/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// ROLE SYSTEM
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

// MULTIPLE PRODUCT IMAGES
app.post("/api/product-images", (req, res) => {

  res.json({
    success: true,
    message: "Multiple image upload ready"
  });
});

// PRODUCT VARIANTS
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

// STRIPE WEBHOOK PLACEHOLDER
app.post("/webhook/stripe", (req, res) => {
  console.log("Stripe webhook connected");
  res.sendStatus(200);
});

// MPESA / MIX PAYMENT PLACEHOLDER
app.post("/api/mobile-payment", (req, res) => {
  res.json({
    success: true,
    message: "Tanzania mobile payment integration ready"
  });
});

app.listen(3000, () => {
  console.log("Pwani Pure V11 running");
});