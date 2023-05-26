// AddProduct Schema
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  // image: {
  //   public_id: { type: String, required: true },
  //   url: { type: String, required: true },
  // },
});

// Product Model
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
