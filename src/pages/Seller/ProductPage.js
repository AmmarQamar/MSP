import { Box, Typography } from '@mui/material'
import SellerSlider from '../../components/slider/SellerSlider';
import ProductsApi from '../../components/products/ProductApi';
// import { useState } from 'react';

const ProductPage = () => {
    return (
        <Box sx={{
            margin: "auto",
            width: "83vw",

        }}>
            <SellerSlider />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>Products</Typography>
            {/* <Products /> */}
            <ProductsApi />
        </Box >
    )
}

export default ProductPage