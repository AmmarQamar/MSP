// Seller Register
const Seller = require("../Models/SellersModel/SellerRegistration");
const Mart = require("../Models/SellersModel/MartModel");
const jwt = require("jsonwebtoken");
const secretkey = "signin";
// const sellerLoginModel = require("../Models/SellersModel/Seller")
const Seller_Register = async (req, res) => {
  console.log("Seller Register Controller works");
  const { fullname, email, phoneno, address, password } = req.body;
  Seller.findOne({ email: email })
    .then((seller) => {
      if (seller) {
        res.send({ message: `${seller.email} already registered` });
      } else {
        const seller = new Seller({
          fullname,
          email,
          phoneno,
          address,
          password,
        });
        seller
          .save()
          .then(() => {
            console.log("Seller registered successfully");
            res.json({ message: "Seller registered successfully" });
          })
          .catch((error) => {
            console.error("Error saving seller:", error);
            // res.status(500).json({ message: "Error saving seller" });
          });
      }
    })
    .catch((error) => {
      console.error("Api error:", error);
    });
};
//Seller Login
const Seller_Login = async (req, res) => {
  const { email, password } = req.body;
  debugger;
  await Seller.findOne({ email: email })
    .then((seller) => {
      if (password === seller.password) {
        const token = jwt.sign({}, secretkey);
        res.send({
          message: "Login Successfully",
          seller: seller,
          token: token,
        });
      } else {
        console.log("Password not Matched");
        res.send({ message: "Password incorrect" });
      }
    })
    .catch((err) => {
      console.log("Account Not Registered:", err);
      console.error(err);
    });
};
// AdMart
const AdMart = async (req, res) => {
  const { title, owner, address, contact, location } = req.body;
  console.log("admart api request");
  const mart = new Mart({
    title,
    owner,
    address,
    contact,
    location,
  });
  mart
    .save()
    .then(() => {
      console.log("Mart Added Successfully");
      res.status(200).json({ message: "Mart Successfully Registered " });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error Adding Mart" });
    });
};

module.exports = {
  Seller_Register,
  Seller_Login,
  AdMart,
};
