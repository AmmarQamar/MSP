// AddProduct Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
});

// Product Model
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
