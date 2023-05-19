import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        filteredProducts: [],
        searchQuery: '',
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
            state.searchQuery = '';
        },
    },
});

export const {
    setAllProducts,
    setFilteredProducts,
    setSearchQuery,
    showAllProducts,
} = productSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectFilteredProducts = (state) => state.products.filteredProducts;
export const selectSearchQuery = (state) => state.products.searchQuery;

export default productSlice.reducer;
