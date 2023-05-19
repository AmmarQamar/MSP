// SearchProduct.js

import React, { useState, useEffect } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, selectFilteredProducts, setAllProducts, selectAllProducts, setFilteredProducts } from '../../redux/Product/ProductSlice';
import '../../assests/css/searchbar.css';

const SearchProduct = () => {
    const dispatch = useDispatch();
    const filteredProducts = useSelector(selectFilteredProducts);
    const allProducts = useSelector(selectAllProducts);
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const response = await fetch('"https://fakestoreapi.com/products"');
    //         const data = await response.json();
    //         console.log(data)
    //         debugger
    //         dispatch(setAllProducts(data));
    //     };
    //     fetchProducts();
    // }, [dispatch]);
    const handleSearch = () => {
        // if (search.trim() === '') {
        //     dispatch(setFilteredProducts(allProducts));
        // } else {
        const filtered = allProducts.filter((product) =>
            product.title && product.title.toLowerCase().includes(search.toLowerCase())
        );
        dispatch(setFilteredProducts(filtered));
    }
    // };


    // const handleSearch = () => {
    //     dispatch(setSearchQuery(search));
    //     console.log(allProducts)
    //     const products = JSON.stringify(allProducts);
    //     debugger
    //     const filtered = products.map((product) =>
    //         product.name.toLowerCase().includes(search.toLowerCase())
    //     );
    //     dispatch(setFilteredProducts(filtered));
    // };

    return (
        <Box className="search-box">
            <input
                type="text"
                className="input-search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <SearchSharpIcon sx={{ cursor: "pointer" }} onClick={handleSearch} />
        </Box>
    );
};

export default SearchProduct;
