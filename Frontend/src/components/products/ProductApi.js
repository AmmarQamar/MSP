import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";
import ProductButton from "../mui/Buttons/ProductButton";
import ProductLink from "../mui/Buttons/ProductLink";
import CardTypographyconst from "../mui/Typography/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectFilteredProducts,
  selectSearchQuery,
  removeProduct,
  setAllProducts,
  showAllProducts,
} from "../../redux/Product/ProductSlice";
import SearchProduct from "../navbar/SearchProduct";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EditProduct from "../../pages/Seller/EditProduct";
const ProductsApi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector(selectAllProducts);
  const filteredProducts = useSelector(selectFilteredProducts); // same as below
  // const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const searchQuery = useSelector(selectSearchQuery);
  const [open, setOpen] = useState(false);
  // For Model open and close
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchProducts = async () => {
    const res = axios
      .get("http://localhost:9002/seller/products")
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch(setAllProducts(data));
        dispatch(showAllProducts());
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);
  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));
  };
  const handleEdit = () => {
    navigate("/productedit");
    // dispatch(editProduct(productId));
    // navigator("/edit");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        m: 2,
        "@media (max-width: 700px)": {
          margin: 0,
          width: "100%",
        },
      }}
    >
      <Grid item sm={12} lg={12}>
        <SearchProduct />
      </Grid>

      {/* {searchQuery !== ""
        ? filteredProducts.map((product) => ( */}
      {searchQuery !== "" && filteredProducts
        ? filteredProducts.map((product) => (
            <Grid item key={product._id} xs={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 330, height: 370 }}>
                {/* <img src={product.image.url} alt="Product Image" /> */}

                <CardMedia
                  component="img"
                  alt="product-image"
                  height="200px"
                  src={`http://localhost:9002${product.image.url}`}
                />
                <CardContent sx={{ mb: -1 }}>
                  <CardTypographyconst value={product.name} />
                  <CardTypographyconst value={product.description} />
                  <CardTypographyconst
                    value={product.price}
                    style={{ color: "grey" }}
                  ></CardTypographyconst>
                  <CardTypographyconst
                    value={product.description}
                    style={{ color: "grey" }}
                  ></CardTypographyconst>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  {/* <ProductButton variant="outlined">
                    <ProductLink to="/edit">Edit</ProductLink>
                  </ProductButton> */}
                  <ProductLink
                    onClick={() => handleDelete(product._id)}
                    to="/addmart"
                  >
                    Delete
                  </ProductLink>
                </CardActions>
              </Card>
            </Grid>
          ))
        : allProducts.map((product) => (
            <Grid item key={product._id} xs={6} md={4} lg={3}>
              <Card
                sx={{ maxWidth: 330, height: 370 }}
                // src={`http://localhost:9002${product.image.url}`}
              >
                <CardMedia
                  component="img"
                  alt="product-image"
                  height="200px"
                  src={`http://localhost:9002${product.image.url}`}
                />
                <CardContent sx={{ mb: -1 }}>
                  <CardTypographyconst value={product.name} />
                  <CardTypographyconst value={product.description} />

                  <CardTypographyconst
                    value={product.price}
                    style={{ color: "grey" }}
                  />
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <ProductButton variant="outlined" onClick={handleOpen}>
                    {/* <ProductLink onClick={handleOpen}>Edit</ProductLink> */}
                    {/* <Link to=`` */}
                    {/* <Link
                      to={`productedit/${product._id}`}
                    > */}
                    {/*  onClick={() => handleEdit()} */}
                    <ProductLink to={`productedit/${product._id}`}>
                      Edit
                    </ProductLink>
                  </ProductButton>
                  {/* <Modal open={open} onClose={handleClose}> */}
                  {/* <EditProduct /> */}
                  {/* </Modal> */}
                  <ProductButton variant="outlined">
                    <ProductLink
                      // onClick={() => handleDelete(product._id)}
                      to="/addmart"
                    >
                      Delete
                    </ProductLink>
                  </ProductButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};

export default ProductsApi;
