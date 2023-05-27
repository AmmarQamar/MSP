const Product = require("../Models/SellersModel/ProductModel");
// Create a new Product
const AddProduct = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const image = {
      public_id: req.file.filename,
      url: `/uploads/${req.file.filename}`,
    };
    const product = new Product({
      name,
      description,
      price,
      quantity,
      image,
    });
    await product.save();
    console.log("Product saved in the database");
    res.status(201).json({ message: "Product Saved Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Product Not Saved" });
  }
};

// Fetch All Products
const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Product Not Found" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    // await Product.deleteOne({ _id: req.params.id });
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Product Not Deleted" });
  }
};

module.exports = {
  AddProduct,
  fetchAllProducts,
  deleteProduct,
};
