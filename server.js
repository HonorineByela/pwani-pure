
require("dotenv").config();

const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

const app = express();

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

app.post("/api/check-role", (req,res)=>{

  const user = users.find(
    u => u.email === req.body.email
  );

  if(!user){
    return res.json({
      success:false
    });
  }

  res.json({
    success:true,
    role:user.role
  });
});

// MULTIPLE PRODUCT IMAGES
app.post("/api/product-images", (req,res)=>{

  res.json({
    success:true,
    message:"Multiple image upload ready"
  });
});

// PRODUCT VARIANTS
app.post("/api/product-variants", (req,res)=>{

  res.json({
    success:true,
    variants:[
      "Size",
      "Color",
      "Material"
    ]
  });
});

// STRIPE WEBHOOK PLACEHOLDER
app.post("/webhook/stripe",(req,res)=>{
  console.log("Stripe webhook connected");
  res.sendStatus(200);
});

// MPESA / MIX PAYMENT PLACEHOLDER
app.post("/api/mobile-payment",(req,res)=>{
  res.json({
    success:true,
    message:"Tanzania mobile payment integration ready"
  });
});

app.listen(3000, ()=>{
  console.log("Pwani Pure V11 running");
});
