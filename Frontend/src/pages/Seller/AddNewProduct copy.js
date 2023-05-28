import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductButton from "../../components/mui/Buttons/ProductButton";
import { Box, Grid, Avatar, Stack } from "@mui/material";
import { centerBox, fieldBox, field } from "./../../assests/css/AddMartCss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import CancelButton from "../../components/mui/Buttons/CancelButton";
import AddMartTypography from "../../components/mui/Typography/AddMartTypography";
import AddMartTextField from "../../components/mui/TextField/AddMartTextField";
import AddButton from "../../components/mui/Buttons/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    image: null,
  });
  const [productURL, setProductURL] = useState("");
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });

    if (name === "image" && files.length > 0) {
      const file = e.target.files[0];
      setProduct((product) => ({
        ...product,
        image: file,
      }));
      setProductURL(URL.createObjectURL(file));
    }
  };
  const handleImageIconClick = () => {
    document.getElementById("image-input").click();
  };

  const handleSubmit = async (e) => {
    const { name, description, price, quantity, image } = product;

    if (name && description && price && quantity && image) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("image", image);
      try {
        const response = await axios.post(
          "http://localhost:9002/seller/products/addproduct",
          formData
        );
        alert(response.data.message);
        console.log(response.data);
        navigate("/home");
      } catch (error) {
        console.error("Error occurred while adding the product:", error);
        alert("Error: Couldn't add Product!");
      }
    } else {
      alert("All Fields Reiquired");
    }
  };

  return (
    <Box sx={centerBox}>
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
                // accept="file, image/png, image/jpeg, image/webp, image/jpg"
                style={{ display: "none" }}
              />

              {productURL && (
                <Box
                  sx={{
                    height: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: 5,
                  }}
                >
                  <img
                    src={productURL}
                    alt="Product"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={6} lg={6} sx={{ mt: 4, textAlign: "right" }}>
              <CancelButton>Cancel</CancelButton>
            </Grid>
            <Grid item xs={6} lg={6} sx={{ mt: 4, textAlign: "right" }}>
              <AddButton onClick={handleSubmit}>Add Product</AddButton>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddNewProduct;
