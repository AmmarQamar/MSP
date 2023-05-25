// Assuming you have an Express.js server set up

// Import required modules
const express = require("express");
const multer = require("multer"); // for handling multipart/form-data
const path = require("path");

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the directory where the uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // append a unique suffix to the original filename
  },
});

// Initialize multer
const upload = multer({ storage: storage });

// Create an Express router
const router = express.Router();

// Define the route to handle the product addition
router.post("/addproduct", upload.single("image"), (req, res) => {
  const { name, description, price, quantity } = req.body;
  const image = req.file; // access the uploaded file via req.file

  // Process the received data as needed (e.g., save to database, perform validation)

  // Example response
  res.status(200).json({
    message: "Product added successfully",
    product: {
      name,
      description,
      price,
      quantity,
      image: image.filename, // assuming you want to store the filename in the database
    },
  });
});

// Register the router with your app
app.use("/products", router);

// const cloudinary = require("cloudinary").v2;

// // Configuration
// cloudinary.config({
//   cloud_name: "dg2hp4fba",
//   api_key: "519541387637975",
//   api_secret: "HLRulyKu0y4Y5OiFOmHT46T_zy8"
// });

// // Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });

// // Generate
// const url = cloudinary.url("olympic_flag", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });

// // The output url
// console.log(url);
// // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
