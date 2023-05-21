import React from 'react'
import AddMart from '../pages/Seller/AddMart';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SellerLayout from '../layouts/SellerLayout';
import { SellerLogin } from '../pages/Seller/Seller_login';
import AddNewProduct from '../pages/Seller/AddNewProduct';
import { SellerRegister } from '../pages/Seller/Seller_Register';
import { SellerLoggedInLayout } from '../layouts/SellerLoggedInLayout';
import Currentlocation from '../components/api/location/CurrentLocation';
import ProductPage from '../pages/Seller/ProductPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <SellerLayout />,
        children: [
            { path: '/', element: <SellerRegister /> },
            { path: '/sellerlogign', element: <SellerLogin /> },
            // { path: '/sellerlogin', element: <SellerLogin /> },
        ],
    },
    {
        // path: '/addmart',
        element: <SellerLoggedInLayout />,
        children: [
            // { path: '/productsapi', element: <ProductApi/> },
            { path: '/products', element: <ProductPage /> },
            { path: '/addmart', element: <AddMart /> },
            { path: '/addproduct', element: <AddNewProduct /> },
            { path: '/currentlocation', element: <Currentlocation /> },

        ],
    },

    // {
    //     path: "/sellerlogin",
    //     element: <SellerLogin />
    // },

]);
export default function Routes(props) {
    return (
        <RouterProvider router={router} />
    )
}