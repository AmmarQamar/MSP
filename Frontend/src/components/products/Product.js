import { useState } from 'react'
import { Grid, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import ProductButton from '../../components/mui/Buttons/ProductButton';
import ProductLink from '../../components/mui/Buttons/ProductLink';
import iphone from './../../assests/images/dummyproducts/iphone11.jpg';
import laptop from './../../assests/images/dummyproducts/laptop.jpg';
import laptop2 from './../../assests/images/dummyproducts/laptop2.jpg';
import mob2 from './../../assests/images/dummyproducts/mob2.jpg';
const Products = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', des: 'Mob', image: iphone, price: 10 },
        { id: 2, name: 'Product 2', des: 'Mob', image: laptop, price: 20 },
        { id: 3, name: 'Product 3', des: 'Laptop', image: mob2, price: 30 },
        { id: 4, name: 'Product 3', des: 'Mobile', image: laptop2, price: 30 },
        { id: 5, name: 'Product 3', des: 'COmputer', image: iphone, price: 30 },
        { id: 6, name: 'Product 3', des: 'Mobile', image: mob2, price: 30 },
    ]);
    return (
        <Grid container
            spacing={2}
            sx={{
                m: 2,
                '@media (max-width: 700px)': {
                    margin: 0,
                    width: '100%',
                },
            }}>
            {products.map((products) => (
                <Grid item key={products.id} xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 330, height: 370 }}>
                        <CardMedia
                            component="img"
                            alt="product-image"
                            height="230px "
                            image={products.image}
                        >
                        </CardMedia>
                        <CardContent sx={{ mb: -1 }}>
                            <Typography gutterBottom variant="h6" >
                                {products.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "grey" }}>
                                {products.des}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                            <ProductButton variant="outlined" color="primary">
                                <ProductLink to='/edit' >Edit</ProductLink>
                            </ProductButton>
                            <ProductButton variant="outlined" color="secondary">
                                <ProductLink to='/addmart' >Delete</ProductLink>
                            </ProductButton>
                        </CardActions>
                    </Card>
                </Grid >
            ))}
        </Grid >
    )
}

export default Products