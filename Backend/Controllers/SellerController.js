// Seller Register
const sellerModel = require("../Models/SellersModel/SellerRegistration");
const SellerRegister = async (req, res) => {
  console.log("Seller Register Controller works");
  const { fullname, email, phoneno, address, password } = req;
  sellerModel
    .findOne({ email: email })
    .then((seller) => {
      if (seller) {
        res.send({ message: `${seller.email} already registered` });
      } else {
        const seller = new sellerModel({
          fullname,
          email,
          phoneno,
          address,
          password,
        });
        seller
          .save()
          .then(() => {
            console.log("Seller saved successfully");
            res.status(200).json({ message: "Seller registered successfully" });
          })
          .catch((error) => {
            console.error("Error saving seller:", error);
            res.status(500).json({ message: "Error saving seller" });
          });
      }
    })
    .catch((error) => {
      console.error("Api error:", error);
    });
};

const SellerLogin = async (req, res) => {
  const { email, password } = req.body;

  Seller.findOne({ email: email })
    .then((seller) => {
      if (password === seller.password) {
        res.send({ message: "Login Successfully", seller: seller });

        // if (!seller) {
        //     res.status(404).json({ message: "Account not registered" });
        //     res.send({ message: "Account not exist" });
        // } else if (password === seller.password) {
        //     res.send({ message: "Login Successfully", seller: seller });
      } else {
        res.send({ message: "Password incorrect" });
      }
    })
    .catch((res) => {
      console.log("Error during login:");
      res.status(500).json({ message: "Account Not Registered" });
    });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "I am All Products" });
};

module.exports = {
  getAllProducts,
  SellerRegister,
  SellerLogin,
};
