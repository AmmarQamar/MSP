const Product = require("../Models/SellersModel/ProductModel");
const cloudinary = require("../utils/Cloudinary");
const AddProduct = async (req, res) => {
  const { name, description, price, quantity, image } = req.body;
  //   try {
  //   const result = await cloudinary.uploader.upload(image, {
  //   const result = await cloudinary.uploader.upload(image, {
  //     folder: "Products",
  //     // width:300,
  //     // crop:"scale"
  //   });
  console.log("productcontroller work");

  console.log("enter in catch");

  const product = new Product({
    name,
    description,
    price,
    quantity,
    image,
  });
  console.log(product);
  // image: { public_id: result.public_id, url: result.secure_url },
  product
    .save()
    .then(() => {
      console.log("saved in database");
      res.status(201).json({ messag: "Product Saved Successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Product Not Saved" });
    });
  //   } catch (err) {
  //     res.json({ message: "DataError: " + err.message });
  //   }

  // try {
  //   const product = await Product.create(req.body);
  //   res.status(201).json(product);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

module.exports = {
  AddProduct,
};
