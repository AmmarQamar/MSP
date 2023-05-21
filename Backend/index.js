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
    // console.log(req.body)
    const { fullname, email, phoneno, address, password } = req.body;
    const seller = new Seller({
        fullname,
        email,
        phoneno,
        address,
        password
    })
    seller.save()
        .then(() => {
            console.log({ message: "success" });
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
    // seller.save(err => {
    //     if (err) {
    //         res.send(err)
    //     } else {
    //         res.send({ message: "Sucesfully Registered" })
    //     }

    // })
})

// Seller Login

app.post("/login", (req, res) => {
    res.send("Login")
})
app.listen(PORT, () => {
    debugger
    console.log(`Run on PORT ${PORT} `);
});
