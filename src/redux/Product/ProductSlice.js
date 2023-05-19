import { createSlice } from '@reduxjs/toolkit';
;

const initialState = [];
const productsSlice = createSlice({
    name: 'productsList',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        allproducts(state, action) {
            // state.map()
        },
        searchproducts(state, action) {

        },
    }
})
export const { allproducts, searchproducts, add } = productsSlice.actions;
export default productsSlice.reducer
