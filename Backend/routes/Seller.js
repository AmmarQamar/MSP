// const express = require("express");
// const {
//   Seller_Register,
//   Seller_Login,
// } = require("../Controllers/SellerController");

// const sellerroute = express.Router();
// sellerroute.route("/register").post(Seller_Register);
// sellerroute.route("/login").post(Seller_Login);
// module.exports = sellerroute;

const express = require("express");
const router = express.Router();

const {
  Seller_Register,
  Seller_Login,
  AdMart,
} = require("../Controllers/SellerController");

router.post("/register", Seller_Register);
router.post("/login", Seller_Login);
router.post("/addmart", AdMart);

module.exports = router;

// // Seller logout
// app.get("/logout", (req, res) => {
//   console.log("Logout Api");
//   res.clearCookie("jwtoken", { path: "/" });
//   res.status(200).send("Logout Successfull");
// });

// // Seller Add Mart
// app.post("/addmart", (req, res) => {
//   const { title, owner, address, contact, location } = req.body;
//   const mart = new Mart({
//     title,
//     owner,
//     address,
//     contact,
//     location,
//   });
//   mart
//     .save()
//     .then(() => {
//       console.log("Mart Added Successfully");
//       res.status(200).json({ message: "Mart Successfully Registered " });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ message: "Error Adding Mart" });
//     });
// });
