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
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
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
      // const selectedImg = ImagetoBase64(e.target.files[0]);
      const selectedURL = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const selectedImg = reader.result;
        setProduct({
          ...product,
          image: selectedImg,
        });
        setProductURL(URL.createObjectURL(selectedURL));
      };
      reader.readAsDataURL(files[0]);
    } else if (name === "name" && value === "") {
      return "Name is required";
    }
  };

  // handle click on image icon
  const handleImageIconClick = () => {
    document.getElementById("image-input").click();
  };

  const handleSubmit = async (e) => {
    const { name, description, price, quantity, image } = product;
    console.log("Submit", name, description, price, quantity);
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("image", product.image);
    console.log(formData);

    if (name && description && price && quantity && image) {
      try {
        const response = await axios
          .post("http://localhost:9002/seller/products/addproduct", formData)
          .then(() => {
            alert("Successfully Added Product!");
            navigate("/home");
          })
          .catch(() => {
            alert("Error: Couldn't add Product!");
          });
      } catch (error) {
        console.error(
          "Error occurred while adding the product: " + error.message
        );
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
                type="number"
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
                type="number"
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
