const mongoose = require("mongoose");
const connectDB = async () => {
  const DB = "mongodb://127.0.0.1:27017/MSP";
  //127.0.0.1:27017/MSP

  // "mongodb+srv://rajaammarqamar:Ammar0343@merncluster.nbpsa15.mongodb.net/MSP"; // mongodb cloud
  mongodb: mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected to cloud");
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

module.exports = connectDB;
