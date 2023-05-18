import { useState } from 'react'
import { Grid, Box, Stack, Typography, Card, CardActions, CardContent, CardMedia, Button, Container } from '@mui/material'
import iphone from './../../assests/images/dummyproducts/iphone11.jpg';
import iphone2 from './../../assests/images/dummyproducts/iphone2.jpg';
import SellerSlider from '../../components/slider/SellerSlider';
import ProductButton from '../../components/mui/Buttons/ProductButton';
import { Link } from 'react-router-dom';
import ProductLink from '../../components/mui/Buttons/ProductLink';

// import iphone from './../images/iphone11.jpg'
// import 
const ProductPage = () => {

    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // };

    const [products] = useState([
        { id: 1, name: 'Product 1', des: 'Mob', image: 'iphone', price: 10 },
        { id: 2, name: 'Product 2', des: 'Mob', image: 'iphone2', price: 20 },
        { id: 3, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
        { id: 4, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
        { id: 5, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
        { id: 6, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
    ]);

    return (
        <Box sx={{ margin: "auto", width: "83vw" }}>
            <SellerSlider />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>Products</Typography>
            <Grid container spacing={2} sx={{ m: 2 }}>
                {products.map((products) => (
                    <Grid item key={products.id} xs={6} md={4} lg={4}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                        <Card sx={{ maxWidth: 330, height: 360 }}>
                            <CardMedia
                                component="img"
                                alt="product-image"
                                height="230px "
                                image={iphone}
                            >
                            </CardMedia>
                            <CardContent sx={{ mb: -1 }}>
                                <Typography gutterBottom variant="h6" >
                                    {products.name}
                                </Typography>
                                <Typography variant="body2" >
                                    {products.des}
                                </Typography>
                            </CardContent>
                            {/* {isHovered && ( */}
                            <CardActions sx={{ mt: 0, display: "flex", justifyContent: "center" }}>
                                <ProductButton variant="outlined" color="primary">
                                    <ProductLink to='/addmart' >Edit</ProductLink>
                                </ProductButton>
                                <ProductButton variant="outlined" color="secondary">
                                    <ProductLink to='/addmart' >Delete</ProductLink>
                                </ProductButton>
                            </CardActions>
                            {/* )} */}
                        </Card>



                    </Grid >
                ))}

            </Grid >

        </Box >
    )
}

export default ProductPage