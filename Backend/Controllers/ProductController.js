const Product = require("../Models/SellersModel/ProductModel");
// const cloudinary = require("../utils/Cloudinary");
const AddProduct = async (req, res) => {
  //   const { name, description, price, quantity, image } = req.body;
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

module.exports = {
  AddProduct,
};
