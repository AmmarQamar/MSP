const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  AddProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../Controllers/ProductController");

// router.post("/addproduct", AddProduct);
// Add product
router.post("/addproduct", upload.single("image"), AddProduct);
//fetch all products
router.get("/", fetchAllProducts);

router.delete("/:id", deleteProduct);

module.exports = router;
