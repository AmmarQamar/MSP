import { useEffect, useState } from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import ProductButton from '../mui/Buttons/ProductButton';
import ProductLink from '../mui/Buttons/ProductLink';
import CardTypographyconst from '../mui/Typography/Typography';

import { useDispatch } from 'react-redux';
import { add, allproducts, searchproducts } from '../../redux/Product/ProductSlice';
const ProductsApi = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            //api fetch
            const res = await fetch("https://fakestoreapi.com/products")
            //fetch returns string so converted in json
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])

    //handle Add
    const handleAdd = (product) => {
        dispatch(add(product));
    }

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
            {products.map((product) => (
                <Grid item key={product.id} xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 330, height: 370 }}>
                        <CardMedia
                            component="img"
                            alt="product-image"
                            height="230px "
                            image={product.image}
                        >
                        </CardMedia>
                        <CardContent sx={{ mb: -1 }}>
                            <CardTypographyconst value={product.title} />

                            <CardTypographyconst value={product.price} style={{ color: "grey" }}>

                            </CardTypographyconst>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                            <ProductButton variant="outlined" >
                                <ProductLink onClick={() => handleAdd(product)} >Add</ProductLink>
                            </ProductButton>
                            <ProductButton variant="outlined" >
                                <ProductLink to='/edit' >Edit</ProductLink>
                            </ProductButton>
                            <ProductButton variant="outlined" >
                                <ProductLink to='/addmart' >Delete</ProductLink>
                            </ProductButton>
                        </CardActions>
                    </Card>
                </Grid >
            ))}
        </Grid >
    )
}

export default ProductsApi