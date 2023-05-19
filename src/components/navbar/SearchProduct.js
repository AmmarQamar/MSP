import React, { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, selectSearchQuery, selectFilteredProducts, setAllProducts, selectAllProducts, setFilteredProducts, showAllProducts } from '../../redux/Product/ProductSlice';
import '../../assests/css/searchbar.css';

const SearchProduct = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);

    const [search, setSearch] = useState('');

    const handleSearch = (search) => {
        setSearch(search);

        const filtered = allProducts.filter(
            (product) =>
                product.title &&
                product.title.toLowerCase().includes(search.toLowerCase())
        );
        dispatch(setFilteredProducts(filtered));
        dispatch(setSearchQuery(search));
    };


    return (
        <Box className="search-box">
            <input
                type="text"
                className="input-search"
                placeholder="Search..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            // onChange={(e) => setSearch(e.target.value)}

            />
            <SearchSharpIcon sx={{ cursor: 'pointer' }} />
            {/* <SearchSharpIcon sx={{ cursor: 'pointer' }} onClick={handleSearch} /> */}

        </Box>
    );
};

export default SearchProduct;
