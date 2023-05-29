import React, { useState, useEffect } from "react";
import { Box, Grid, Avatar } from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelButton from "../../components/mui/Buttons/CancelButton";
import AddMartTypography from "../../components/mui/Typography/AddMartTypography";
import AddMartTextField from "../../components/mui/TextField/AddMartTextField";
import AddButton from "../../components/mui/Buttons/AddButton";
import { boxstyle } from "../../assests/css/MidBoxStyle";
import { fieldBox } from "../../assests/css/AddMartCss";
import { editBox, imgBox, img } from "../../assests/css/EditProduct";
import {
  editProduct,
  selectAllProducts,
  setAllProducts,
  showAllProducts,
} from "../../redux/Product/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const EditProduct = (productid) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  console.log(productid);
  // debugger;
  const products = useSelector((state) => state.products.allProducts);
  const existingProduct = products.filter(
    (product) => product._id === params.id
  );
  console.log(existingProduct);
  const { _id, name, description, quantity, price, image } = existingProduct[0];
  console.log(_id, name, description, quantity, price, image);

  const [productURL, setProductURL] = useState("");

  const [product, setProduct] = useState({
    // _id,
    _id: params.id,
    name,
    description,
    quantity,
    price,
    image,
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
      // document.getElementById("ex-image").
      setProductURL(URL.createObjectURL(file));
    }
  };

  const handleImageIconClick = () => {
    document.getElementById("image-input").click();
  };

  const handleSubmit = async (e) => {
    const { description, price, quantity, image } = product;
    debugger;
    console.log(_id, name, description, price, quantity);
    console.log(_id);
    if (name && description && price && quantity && image) {
      const formData = new FormData();
      formData.append("_id", params.id);
      formData.append("image", product.image);
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("quantity", product.quantity);
      // console.log(params.id);
      dispatch(editProduct(formData));

      // dispatch(
      //   editproduct({
      //     _id: params.id,
      //     name: product.name,
      //     description: product.description,
      //     price: product.price,
      //     quantity: product.quantity,
      //     image: product.image,
      //   })
      // );
    } else {
      alert("fill all fields");
    }
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    navigate("/home");
  };
  return (
    <Box sx={editBox}>
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
              {productURL && <p>{productURL.name}</p>}
              <input
                id="image-input"
                required
                name="image"
                type="file"
                onChange={handleChange}
                // accept="file, image/png, image/jpeg, image/webp, image/jpg"
                style={{ display: "none" }}
              />
              {productURL ? (
                <Box sx={imgBox}>
                  <img src={productURL} alt="Product" id="ex-image" sx={img} />
                </Box>
              ) : (
                <Box sx={imgBox}>
                  <img
                    src={`http://localhost:9002${product.image.url}`}
                    alt="Product"
                    id="ex-image"
                    sx={img}
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
