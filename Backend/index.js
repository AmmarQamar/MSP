const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const { json, urlencoded } = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 9002
mongoose.connect('mongodb://127.0.0.1:27017/MSP', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

// Schema
const sellerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phoneno: String,
    address: String,
    password: String
})

//Model
const Seller = new mongoose.model("Seller", sellerSchema)

// Routes
app.get("/", (req, res) => {
    res.send("My APiss")
})

//                  POST  Routes
// Seller Register
app.post("/register", (req, res) => {
    const { fullname, email, phoneno, address, password } = req.body;
    Seller.findOne({ email: email })
        .then(seller => {
            if (seller) {
                res.send({ message: `${seller.email} already registered` })
            }
            else {
                const seller = new Seller({
                    fullname,
                    email,
                    phoneno,
                    address,
                    password
                })

                seller.save()
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
})
// Seller Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    Seller.findOne({ email: email })
        .then(seller => {
            if (!seller) {
                res.status(404).json({ message: "Account not registered" });
            } else if (password === seller.password) {
                res.send({ message: "Login Successfully", seller: seller });
            } else {
                res.send({ message: "Password incorrect" });
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            res.status(500).json({ message: "Error during login" });
        });
});

app.listen(PORT, () => {
    debugger
    console.log(`Run on PORT ${PORT} `);
});
