import React, { useState } from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Box, Icon, IconButton } from '@mui/material';
import SearchSharp from '@mui/icons-material/SearchSharp';
import '../../assests/css/searchbar.css';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/Product/ProductSlice';

const SearchProduct = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [search, setSearch] = useState('');
    function hanldeSearch{ }

}

return (
    <Box className="search-box">
        <input type="text"
            className="input-search"
            placeholder="Search..."
            value={search} />
        <SearchSharpIcon sx={{ cursor: "pointer" }} onClick={hanldeSearch} />
    </Box>
)
}

export default SearchProduct