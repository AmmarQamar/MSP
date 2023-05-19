import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Product/ProductSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});
export default store;


