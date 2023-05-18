import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = ProductSlice.actions

export default ProductSlice.reducer