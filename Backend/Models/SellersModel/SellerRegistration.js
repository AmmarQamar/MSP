const mongoose = require("mongoose");
// const { Schema, model } = require("mongoose");
const sellerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phoneno: String,
  address: String,
  password: String,
});
const SellerRegistration = new mongoose.model(
  "SellerRegistration",
  sellerSchema
);

// Export Model
module.exports = SellerRegistration;
