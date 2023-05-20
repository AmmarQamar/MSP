import { Box, Typography } from '@mui/material'
import SellerSlider from '../../components/slider/SellerSlider';
import Products from '../../components/products/Product';
const ProductPage = () => {

    
    return (
        <Box sx={{
            margin: "auto",
            width: "83vw",
            '@media (max-width: 700px)': {
                margin: 0,
                width: '100%',
            },
        }}>
            <SellerSlider />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>Products</Typography>
            <Products />
        </Box >
    )
}

export default ProductPage