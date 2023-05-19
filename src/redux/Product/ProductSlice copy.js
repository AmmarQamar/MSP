import { createSlice } from '@reduxjs/toolkit'

import iphone from '../../assests/images/dummyproducts/iphone11.jpg';
import laptop from '../../assests/images/dummyproducts/laptop.jpg';
import laptop2 from '../../assests/images/dummyproducts/laptop2.jpg';
import mob2 from '../../assests/images/dummyproducts/mob2.jpg';
// const initialState = {
//     value: 0,
// }
export const ProductSlice = createSlice({
    name: 'productList',
    initialState: {
        products: [
            { id: 1, name: 'Product 1', des: 'Mob', image: iphone, price: 10 },
            { id: 2, name: 'Product 2', des: 'Mob', image: laptop, price: 20 },
            { id: 3, name: 'Product 3', des: 'Laptop', image: mob2, price: 30 },
            { id: 4, name: 'Product 3', des: 'Mobile', image: laptop2, price: 30 },
            { id: 5, name: 'Product 3', des: 'COmputer', image: iphone, price: 30 },
            { id: 6, name: 'Product 3', des: 'Mobile', image: mob2, price: 30 },
        ],
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
})
// Action creators are generated for each case reducer function
export const { setSearchTerm } = ProductSlice.actions;

export default ProductSlice.reducer