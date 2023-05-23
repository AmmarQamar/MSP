const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const { json, urlencoded } = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 9002
//Database Connect
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

// Seller Schema
const sellerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phoneno: String,
    address: String,
    password: String
})
// Add Mart Schema
const martSchema = new mongoose.Schema({
    title: String,
    owner: String,
    address: String,
    contact: String,
    location: {
        lat: Number,
        lng: Number
    }

})

//      Models    
//Seller Model
const Seller = new mongoose.model("Seller", sellerSchema)
//Mart Model
const Mart = new mongoose.model("Mart", martSchema)





// Routes
app.get("/", (req, res) => {
    res.send("My APiss")
})

//                  POST  Routes

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

// Seller logout
app.get('/logout', (req, res) => {
    console.log("Logout Api")
    res.clearCookie('jwtoken', { path: '/' })
    res.status(200).send("Logout Successfull")
})

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

// Seller Add Mart
app.post('/addmart', (req, res) => {
    const { title, owner, address, contact, location } = req.body
    debugger
    const { lat, lng } = location;

    const mart = new Mart({
        title,
        owner,
        address,
        contact,
        location: {
            lat,
            lng
        }
    })
    mart.save()
        .then(() => {
            console.log("Mart Added Successfully")
            res.status(200).json({ message: "Mart Successfully Registered " })
        })
        .catch(() => {
            res.json("Mard Not Registered in database")
        })

})





app.listen(PORT, () => {
    debugger
    console.log(`Run on PORT ${PORT} `);
});
