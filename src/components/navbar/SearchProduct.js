import React, { useState } from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Box } from '@mui/material';
import '../../assests/css/searchbar.css';
const SearchProduct = () => {

    // const filteredProducts = useSelector(selectFilteredProducts);

    return (


        <Box className="search-box">
            <input type="text"
                className="input-search"
                placeholder="Search..."
            // defaultValue={searchTerm}
            // value={searchTerm}

            />
            <SearchSharpIcon sx={{ cursor: "pointer" }} />
        </Box>
        // </Provider>
    )

}
export default SearchProduct