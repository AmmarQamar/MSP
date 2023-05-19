import { useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import ProductButton from '../mui/Buttons/ProductButton';
import ProductLink from '../mui/Buttons/ProductLink';
import CardTypographyconst from '../mui/Typography/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAllProducts,
    setFilteredProducts,
    selectAllProducts,
    selectFilteredProducts,
    showAllProducts,
    selectSearchQuery,
} from '../../redux/Product/ProductSlice';
import SearchProduct from '../navbar/SearchProduct';

const ProductsApi = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    const filteredProducts = useSelector(selectFilteredProducts);
    const searchQuery = useSelector(selectSearchQuery);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setAllProducts(data));
            dispatch(showAllProducts());
        };
        fetchProducts();
    }, [dispatch]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                m: 2,
                '@media (max-width: 700px)': {
                    margin: 0,
                    width: '100%',
                },
            }}
        >
            <Grid item sm={12} lg={12}>
                <SearchProduct />
            </Grid>
            {searchQuery !== '' ? (
                filteredProducts.map((product) => (
                    <Grid item key={product.id} xs={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 330, height: 370 }}>
                            <CardMedia component="img" alt="product-image" height="230px" image={product.image} />
                            <CardContent sx={{ mb: -1 }}>
                                <CardTypographyconst value={product.title} />
                                <CardTypographyconst value={product.price} style={{ color: 'grey' }}></CardTypographyconst>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ProductButton variant="outlined">
                                    <ProductLink to="/edit">Edit</ProductLink>
                                </ProductButton>
                                <ProductButton variant="outlined">
                                    <ProductLink to="/addmart">Delete</ProductLink>
                                </ProductButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            ) : (
                allProducts.map((product) => (
                    <Grid item key={product.id} xs={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 330, height: 370 }}>
                            <CardMedia component="img" alt="product-image" height="230px" image={product.image} />
                            <CardContent sx={{ mb: -1 }}>
                                <CardTypographyconst value={product.title} />
                                <CardTypographyconst value={product.price} style={{ color: 'grey' }}></CardTypographyconst>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ProductButton variant="outlined">
                                    <ProductLink to="/edit">Edit</ProductLink>
                                </ProductButton>
                                <ProductButton variant="outlined">
                                    <ProductLink to="/addmart">Delete</ProductLink>
                                </ProductButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default ProductsApi;
