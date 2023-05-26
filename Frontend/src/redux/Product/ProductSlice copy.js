import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    searchQuery: "",
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    showAllProducts: (state) => {
      state.filteredProducts = state.allProducts;
      state.searchQuery = "";
    },
    filterProducts: (state, action) => {
      const searchQuery = action.payload;
      const filteredProducts = state.allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      state.filteredProducts = filteredProducts;
    },
    removeProduct: (state, action) => {
      console.log("delete");
      const productId = action.payload;
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== productId
      );
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const {
  setAllProducts,
  setFilteredProducts,
  setSearchQuery,
  showAllProducts,
  removeProduct,
} = productSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectSearchQuery = (state) => state.products.searchQuery;

export default productSlice.reducer;
