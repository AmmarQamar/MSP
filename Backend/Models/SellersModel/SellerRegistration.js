const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const sellerSchema = new Schema({
  fullname: String,
  email: String,
  phoneno: String,
  address: String,
  password: String,
});
//Seller Model
const Seller = new mongoose.model("Seller", sellerSchema);
module.exports = Seller;
