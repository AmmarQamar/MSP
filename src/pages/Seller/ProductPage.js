import { Box, Typography } from '@mui/material'
import SellerSlider from '../../components/slider/SellerSlider';
import Products from '../../components/products/Product';
// import { useState } from 'react';

const ProductPage = () => {
    // const []
    return (
        <Box sx={{
            margin: "auto",
            width: "83vw",

        }}>
            <SellerSlider />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>Products</Typography>
            <Products />
        </Box >
    )
}

export default ProductPage