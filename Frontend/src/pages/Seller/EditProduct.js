import React, { useState } from "react";
import { Box, Grid, Avatar } from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelButton from "../../components/mui/Buttons/CancelButton";
import AddMartTypography from "../../components/mui/Typography/AddMartTypography";
import AddMartTextField from "../../components/mui/TextField/AddMartTextField";
import AddButton from "../../components/mui/Buttons/AddButton";
import { boxstyle } from "../../assests/css/MidBoxStyle";
import { fieldBox } from "../../assests/css/AddMartCss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  console.log(allProducts);

  console.log(params.id);

  const [productURL, setProductURL] = useState("");

  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    if (name === "image" && files.length > 0) {
      const file = e.target.files[0];
      setProduct({
        ...product,
        image: file,
      });
      setProductURL(URL.createObjectURL(file));
    }
  };

  const handleImageIconClick = () => {
    document.getElementById("image-input").click();
  };

  const handleSubmit = (e) => {
    console.log("submit button clicked");
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    navigate("/home");
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "35vw",
        height: "70vh",
        p: 5,
        boxShadow: 24,
        borderRadius: 3,
        backgroundColor: "#FEFEFE",
      }}
    >
      <Box>
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} sx={{ marginBottom: 3 }}>
              <AddMartTypography
                variant="h5"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Edit Product
              </AddMartTypography>
            </Grid>
            {/* Name */}
            <Grid item xs={12} lg={5}>
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
            <Grid item xs={12} lg={5}>
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
            <Grid item xs={12} lg={5}>
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
            <Grid item xs={12} lg={5}>
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
            <Grid item xs={12} lg={5}>
              <AddMartTypography>Ad Image*</AddMartTypography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Avatar
                sx={{ backgroundColor: "transparent", p: 2, margin: "auto" }}
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
                    height: 220,
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
                      width: "80%",
                      height: "100%",
                      backgroundSize: 200,
                      //   objectFit: "cover",
                    }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={6} lg={6} sx={{ mt: 4, textAlign: "right" }}>
              <CancelButton variant="contained" onClick={handleCancel}>
                Cancel
              </CancelButton>
            </Grid>
            <Grid item xs={6} lg={6} sx={{ mt: 4, textAlign: "right" }}>
              <AddButton onClick={handleSubmit}>Updata</AddButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default EditProduct;
