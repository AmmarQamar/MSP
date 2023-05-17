import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UserLayout from '../layouts/UserLayout';
import { SellerLogin } from '../pages/Seller/Seller_login';
const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
    },
    {
        path: "/sellerlogin",
        element: <SellerLogin />
    }
]);
export default function Routes(props) {
    return (
        <RouterProvider router={router} />
    )
}