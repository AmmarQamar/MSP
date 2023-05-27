const connectDB = require("./database/db");
const cors = require("cors");
const express = require("express");
const { json, urlencoded } = require("express");
// const multer = require("multer");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 9002;
connectDB();

const router = express.Router();

const sellerRoute = require("./routes/Seller");
const productRouter = require("./routes/products");

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/seller", sellerRoute);

// app.use("/seller/products", productRouter);

app.use("/seller/products", productRouter);
// const { getAllProducts } = require("./Controllers/SellerController");
//Middleware

// app.use("/register", sellerroute);
// app.use("/login", sellerroute);

//                  POST  Routes

// // Seller Login
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   Seller.findOne({ email: email })
//     .then((seller) => {
//       if (password === seller.password) {
//         res.send({ message: "Login Successfully", seller: seller });

//         // if (!seller) {
//         //     res.status(404).json({ message: "Account not registered" });
//         //     res.send({ message: "Account not exist" });
//         // } else if (password === seller.password) {
//         //     res.send({ message: "Login Successfully", seller: seller });
//       } else {
//         res.send({ message: "Password incorrect" });
//       }
//     })
//     .catch((res) => {
//       console.log("Error during login:");
//       res.status(500).json({ message: "Account Not Registered" });
//     });
// });

// // Seller logout
// app.get("/logout", (req, res) => {
//   console.log("Logout Api");
//   res.clearCookie("jwtoken", { path: "/" });
//   res.status(200).send("Logout Successfull");
// });

// // Seller Register
// app.post("/register", (req, res) => {
//   const { fullname, email, phoneno, address, password } = req.body;
//   Seller.findOne({ email: email }).then((seller) => {
//     if (seller) {
//       res.send({ message: `${seller.email} already registered` });
//     } else {
//       const seller = new Seller({
//         fullname,
//         email,
//         phoneno,
//         address,
//         password,
//       });
//       seller
//         .save()
//         .then(() => {
//           console.log("Seller saved successfully");
//           res.status(200).json({ message: "Seller registered successfully" });
//         })
//         .catch((error) => {
//           console.error("Error saving seller:", error);
//           res.status(500).json({ message: "Error saving seller" });
//         });
//     }
//   });
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

// New Product Add Route
// app.post("/products/addproduct", (req, res) => {
//   const { name, description, price, quantity, image } = req.body;
//   const product = new Product({
//     name,
//     description,
//     price,
//     quantity,
//     image,
//   });
//   product
//     .save()
//     .then(() => {
//       res
//         .status(200)
//         .json({ message: "Product Added Successfully through Api" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: "Error Adding Product" });
//     });
// });

app.listen(PORT, () => {
  debugger;
  console.log(`Run on PORT ${PORT} `);
});
