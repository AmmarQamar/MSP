import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductButton from "../../components/mui/Buttons/ProductButton";
import CancelButton from "../../components/mui/Buttons/CancelButton";
import {
  Box,
  TextField,
  Grid,
  Avatar,
  Typography,
  Button,
  Stack,
  Input,
} from "@mui/material";
import { centerBox, fieldBox, field } from "./../../assests/css/AddMartCss";
// import { styled } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import AddMartTypography from "../../components/mui/Typography/AddMartTypography";
import AddMartTextField from "../../components/mui/TextField/AddMartTextField";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import AddButton from "../../components/mui/Buttons/AddButton";

const AddNewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });
  //   const [file, setFile] = useState();
  const [productURL, setProductURL] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    if (name === "image" && files.length > 0) {
      const selectedImg = e.target.files[0];
      //   const imagePath = imageFile.path;
      //   const imageURL = URL.createObjectURL(selectedImg);
      setProduct({
        ...product,
        image: selectedImg,
      });
      setProductURL(URL.createObjectURL(selectedImg));
    } else if (name === "name" && value === "") {
      return "Name is required";
    }
  };

  // handle click on image icon
  const handleImageIconClick = () => {
    document.getElementById("image-input").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, price, quantity, image } = product;
    debugger;
    console.log(name, description, price, quantity, image);
    if (name && description && price && quantity && image) {
      try {
        const response = await axios
          .post("http://localhost:9002/products/addproduct", product)
          .then(() => {
            alert("Successfully Added Product!");
          })
          .catch(() => {
            alert("Error: Couldn't add Product!");
          });
        console.log(response.data.message);
        console.log("Product added successfully");
      } catch (error) {
        alert("Error occurred while adding the product: " + error.message);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Box sx={centerBox}>
      {/* <Box sx={centerBox} component="form"> */}
      <Box sx={fieldBox}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} sx={{ marginBottom: 3 }}>
              <AddMartTypography
                variant="h6"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Add Product
              </AddMartTypography>
            </Grid>
            {/* Name */}
            <Grid item xs={12} lg={5} sx={field}>
              <AddMartTypography>Name*</AddMartTypography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <AddMartTextField
                name="name"
                value={product.name}
                onChange={handleChange}
              ></AddMartTextField>
            </Grid>
            {/* Description */}
            <Grid item xs={12} lg={5} sx={field}>
              <AddMartTypography>Description*</AddMartTypography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <AddMartTextField
                name="description"
                value={product.description}
                onChange={handleChange}
              ></AddMartTextField>
            </Grid>
            {/* Price */}
            <Grid item xs={12} lg={5} sx={field}>
              <AddMartTypography>Quantity*</AddMartTypography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <AddMartTextField
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
              ></AddMartTextField>
            </Grid>
            {/* Quantity */}
            <Grid item xs={12} lg={5} sx={field}>
              <AddMartTypography>Price*</AddMartTypography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <AddMartTextField
                name="price"
                value={product.price}
                onChange={handleChange}
              ></AddMartTextField>
            </Grid>
            {/* Insert Image */}
            <Grid item xs={12} lg={5} sx={field}>
              <AddMartTypography>Ad Image*</AddMartTypography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Avatar
                sx={{ backgroundColor: "transparent", p: 5, margin: "auto" }}
                onClick={handleImageIconClick}
              >
                <AddPhotoAlternateIcon
                  sx={{ cursor: "pointer", color: "black", fontSize: 30 }}
                />
                onClick={() => document.getElementById("image-input").click()}
              </Avatar>
              {/* {productURL && <p>{productURL.name}</p>} */}
              <input
                id="image-input"
                required
                name="image"
                type="file"
                onChange={handleChange}
                accept="image/png, image/jpeg, image/webp, image/jpg"
                style={{ display: "none" }}
              />

              {productURL && (
                <img
                  src={productURL}
                  alt="Product"
                  style={{ width: "220px" }}
                />
              )}
            </Grid>
            <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
              <CancelButton>Cancel</CancelButton>
            </Grid>
            <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
              <AddButton
                onClick={handleSubmit}
                // sx={{ bgcolor: "#171E39", height: 30, fontSize: 11 }}
              >
                Add Product
              </AddButton>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddNewProduct;
