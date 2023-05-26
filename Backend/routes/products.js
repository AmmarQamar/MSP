const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { AddProduct } = require("../Controllers/ProductController");

// router.post("/addproduct", AddProduct);
router.post("/addproduct", upload.single("image"), AddProduct);

module.exports = router;
