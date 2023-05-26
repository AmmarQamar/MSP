import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initailValue: 0,

  reducers: {
    addProduct: (state, action) => {
      console.log("addproduct");
    },
    editProduct: (state, action) => {
      console.log("editproduct");
    },
    deleteProduct: (state, action) => {
      console.log("deleteproduct");
    },
    allProducts: (state, action) => {
      console.log("allproducts");
    },
  },
});

export default productSlice.reducer;
