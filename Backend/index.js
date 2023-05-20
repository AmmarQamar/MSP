const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const { json, urlencoded } = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000
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


// Routes
app.get("/", (req, res) => {
    rs.send("My APi")
})

app.post("/sellerregister", (req, res) => {
    res.send("My Api Rgister")
})

app.post("/sellerlogin", (req, res) => {
    res.send("Seller Login")
})
app.listen(PORT, () => {
    debugger
    console.log(`Run on PORT ${PORT} `);
});
