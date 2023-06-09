const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  AddProduct,
  fetchAllProducts,
  deleteProduct,
  EditProduct,
} = require("../Controllers/ProductController");

// router.post("/addproduct", AddProduct);
// Add product
router.post("/addproduct", upload.single("image"), AddProduct);
//fetch all products
router.get("/", fetchAllProducts);

router.delete("/:id", deleteProduct);
router.put("edit/:id", EditProduct);

module.exports = router;
