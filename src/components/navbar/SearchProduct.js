import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Box, Icon, IconButton } from '@mui/material';
import SearchSharp from '@mui/icons-material/SearchSharp';
import '../../assests/css/searchbar.css';
const SearchProduct = () => {
    return (
        <Box className="search-box">
            <input type="text" className="input-search" placeholder="Search..." />
            <SearchSharpIcon sx={{ cursor: "pointer" }} />
        </Box>
    )
}

export default SearchProduct