const express = require("express");
const router = express.Router();
const { AddProduct } = require("../Controllers/ProductController");

router.post("/addproduct", AddProduct);

module.exports = router;
