// Seller Schema

// Add Mart Schema
const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
});
const martSchema = new mongoose.Schema({
  title: String,
  owner: String,
  address: String,
  contact: String,
  location: {
    type: {
      lat: Number,
      lng: Number,
    },
    default: {},
  },
});

//      Models

//Mart Model
const Mart = new mongoose.model("Mart", martSchema);

module.exports = Mart;
