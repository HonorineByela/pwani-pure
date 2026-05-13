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
          scroll-behavior:smooth;
        }

        nav{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:20px 40px;
          border-bottom:1px solid rgba(255,215,0,0.3);
          background:rgba(0,0,0,0.7);
          backdrop-filter:blur(10px);
          position:sticky;
          top:0;
          z-index:1000;
        }

        .logo{
          color:gold;
          font-size:30px;
          font-weight:bold;
        }

        .nav-links{
          display:flex;
          gap:20px;
          color:white;
        }

        .hero{
          height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          background:
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
            url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1400&auto=format&fit=crop');

          background-size:cover;
          background-position:center;
        }

        h1{
          font-size:70px;
          color:gold;
          margin-bottom:20px;
        }

        p{
          font-size:20px;
          width:70%;
          line-height:1.8;
        }

        button{
          padding:15px 35px;
          border:none;
          background:gold;
          color:black;
          font-size:18px;
          cursor:pointer;
          border-radius:10px;
          transition:0.3s;
        }

        button:hover{
          background:white;
          box-shadow:0 0 20px gold;
        }

        .hero-buttons{
          display:flex;
          gap:20px;
          margin-top:30px;
          flex-wrap:wrap;
          justify-content:center;
        }

        .products{
          padding:100px 40px;
        }

        .products h2{
          text-align:center;
          color:gold;
          font-size:45px;
          margin-bottom:50px;
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
          transition:0.4s;
          padding-bottom:20px;
        }

        .card:hover{
          transform:translateY(-10px);
          box-shadow:0 0 25px gold;
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

        .about{
          padding:100px 40px;
        }

        .about-content{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:50px;
          align-items:center;
        }

        .about-text h2{
          color:gold;
          font-size:45px;
        }

        .about-text p{
          width:100%;
        }

        .about-image img{
          width:100%;
          border-radius:20px;
          border:2px solid gold;
        }

        .categories{
          padding:100px 40px;
        }

        .categories h2{
          text-align:center;
          color:gold;
          font-size:45px;
          margin-bottom:50px;
        }

        .category-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:30px;
        }

        .category{
          position:relative;
          overflow:hidden;
          border-radius:15px;
          border:1px solid gold;
        }

        .category img{
          width:100%;
          height:350px;
          object-fit:cover;
          transition:0.5s;
        }

        .category:hover img{
          transform:scale(1.1);
        }

        .category h3{
          position:absolute;
          bottom:20px;
          left:20px;
          color:white;
          background:rgba(0,0,0,0.5);
          padding:10px 20px;
          border-radius:10px;
        }

        .testimonials{
          padding:100px 40px;
          text-align:center;
        }

        .testimonials h2{
          color:gold;
          font-size:45px;
          margin-bottom:50px;
        }

        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:30px;
        }

        .testimonial{
          background:#111;
          border:1px solid gold;
          border-radius:15px;
          padding:30px;
          transition:0.4s;
        }

        .testimonial:hover{
          transform:translateY(-10px);
          box-shadow:0 0 25px gold;
        }

        .testimonial p{
          width:100%;
        }

        .testimonial h3{
          color:gold;
          margin-top:20px;
        }

        .newsletter{
          padding:100px 40px;
          text-align:center;
        }

        .newsletter h2{
          color:gold;
          font-size:45px;
        }

        .newsletter p{
          width:60%;
          margin:auto;
          margin-top:20px;
          margin-bottom:40px;
        }

        .newsletter-box{
          display:flex;
          justify-content:center;
          gap:10px;
          flex-wrap:wrap;
        }

        .newsletter-box input{
          padding:15px;
          width:300px;
          border:none;
          border-radius:10px;
          font-size:16px;
        }

        footer{
          text-align:center;
          padding:40px;
          border-top:1px solid gold;
          color:gold;
          margin-top:80px;
        }

      </style>

    </head>

    <body>

      <nav>

        <div class="logo">
          Pwani Pure
        </div>

        <div class="nav-links">
          <span>Home</span>
          <span>Shop</span>
          <span>Skincare</span>
          <span>Fashion</span>
          <span>🛒 Cart</span>
        </div>

      </nav>

      <section class="hero">

        <h1>Pure Beauty Pure You</h1>

        <p>
          Discover premium skincare and luxury fashion crafted
          for elegance, confidence, and timeless beauty.
        </p>

        <div class="hero-buttons">
          <button>Shop Now</button>
          <button>View Collection</button>
        </div>

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

      <section class="about">

        <div class="about-content">

          <div class="about-text">

            <h2>About Pwani Pure</h2>

            <p>
              Pwani Pure blends luxury skincare and fashion into one timeless experience.
              Inspired by elegance, confidence, and coastal beauty.
            </p>

            <button>Discover More</button>

          </div>

          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" />
          </div>

        </div>

      </section>

      <section class="categories">

        <h2>Shop By Category</h2>

        <div class="category-grid">

          <div class="category">
            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop" />
            <h3>Skincare</h3>
          </div>

          <div class="category">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop" />
            <h3>Fashion</h3>
          </div>

          <div class="category">
            <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop" />
            <h3>Accessories</h3>
          </div>

        </div>

      </section>

      <section class="testimonials">

        <h2>What Our Clients Say</h2>

        <div class="testimonial-grid">

          <div class="testimonial">
            <p>
              “Absolutely luxurious. The skincare products transformed my routine completely.”
            </p>
            <h3>— Sophia M.</h3>
          </div>

          <div class="testimonial">
            <p>
              “Elegant fashion and premium quality. Pwani Pure feels like a world-class brand.”
            </p>
            <h3>— Amelia K.</h3>
          </div>

          <div class="testimonial">
            <p>
              “The customer experience and products are unmatched.”
            </p>
            <h3>— Nadia R.</h3>
          </div>

        </div>

      </section>

      <section class="newsletter">

        <h2>Join The Pwani Pure World</h2>

        <p>
          Be the first to discover exclusive collections,
          skincare drops, and luxury fashion releases.
        </p>

        <div class="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

      </section>

      <footer>
        © 2026 Pwani Pure — Luxury Skincare & Fashion
      </footer>

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