// const express = require("express");
// // const sellerroute = express.Router();
// const {
//   SellerRegister,
//   SellerLogin,
// } = require("../Controllers/SellerController");

// sellerroute.route("/register").post(SellerRegister);
// sellerroute.route("/login").post(SellerLogin);
// module.exports = sellerroute;
// // // Seller Login
// // app.post("/login", (req, res) => {
// //   const { email, password } = req.body;

// //   Seller.findOne({ email: email })
// //     .then((seller) => {
// //       if (password === seller.password) {
// //         res.send({ message: "Login Successfully", seller: seller });

// //         // if (!seller) {
// //         //     res.status(404).json({ message: "Account not registered" });
// //         //     res.send({ message: "Account not exist" });
// //         // } else if (password === seller.password) {
// //         //     res.send({ message: "Login Successfully", seller: seller });
// //       } else {
// //         res.send({ message: "Password incorrect" });
// //       }
// //     })
// //     .catch((res) => {
// //       console.log("Error during login:");
// //       res.status(500).json({ message: "Account Not Registered" });
// //     });
// // });

// // // Seller logout
// // app.get("/logout", (req, res) => {
// //   console.log("Logout Api");
// //   res.clearCookie("jwtoken", { path: "/" });
// //   res.status(200).send("Logout Successfull");
// // });

// // // Seller Register
// // // app.post("/register", (req, res) => {
// // //   const { fullname, email, phoneno, address, password } = req.body;
// // //   Seller.findOne({ email: email }).then((seller) => {
// // //     if (seller) {
// // //       res.send({ message: `${seller.email} already registered` });
// // //     } else {
// // //       const seller = new Seller({
// // //         fullname,
// // //         email,
// // //         phoneno,
// // //         address,
// // //         password,
// // //       });
// // //       seller
// // //         .save()
// // //         .then(() => {
// // //           console.log("Seller saved successfully");
// // //           res.status(200).json({ message: "Seller registered successfully" });
// // //         })
// // //         .catch((error) => {
// // //           console.error("Error saving seller:", error);
// // //           res.status(500).json({ message: "Error saving seller" });
// // //         });
// // //     }
// // //   });
// // // });

// // // Seller Add Mart
// // app.post("/addmart", (req, res) => {
// //   const { title, owner, address, contact, location } = req.body;
// //   const mart = new Mart({
// //     title,
// //     owner,
// //     address,
// //     contact,
// //     location,
// //   });
// //   mart
// //     .save()
// //     .then(() => {
// //       console.log("Mart Added Successfully");
// //       res.status(200).json({ message: "Mart Successfully Registered " });
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //       res.status(500).json({ message: "Error Adding Mart" });
// //     });
// // });
