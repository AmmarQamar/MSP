import { useState } from 'react'
import { Grid, Stack, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import iphone from './../images/iphone11.jpg'
const ProductPage = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', des: 'Mobile', image: 'iphone', price: 10 },
        { id: 2, name: 'Product 2', des: 'Mobile', image: 'mob2', price: 20 },
        { id: 3, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
        { id: 4, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
        { id: 5, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },
        { id: 6, name: 'Product 3', des: 'Mobile', image: 'laptop', price: 30 },

    ]);

    return (
        <div>
            <Grid container spacing={2} sx={{ m: 2 }}>
                {products.map((products) => (
                    <Grid item key={products.id} xs={6} md={4} lg={3}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140 "
                            // image={products.image}
                            // image={require(`./iphone11.jpg`).default}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {products.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {products.des}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>


                    </Grid>
                ))}

            </Grid>

        </div>
    )
}

export default ProductPage