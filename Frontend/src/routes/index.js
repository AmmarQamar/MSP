import React, { useState } from "react";
import AddMart from "../pages/Seller/AddMart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SellerLayout from "../layouts/SellerLayout";
import { SellerLogin } from "../pages/Seller/Seller_login";
import AddNewProduct from "../pages/Seller/AddNewProduct";
import { SellerRegister } from "../pages/Seller/Seller_Register";
import { SellerLoggedInLayout } from "../layouts/SellerLoggedInLayout";
// import ErrorPage from "./error";
import UserLoginPage from "../pages/User/UserLoginPage";
import Location from "../components/api/location/Location";
import ProductPage from "../pages/Seller/ProductPage";
import HomePage from "../pages/Home";
import EditProduct from "../pages/Seller/EditProduct";

const Routes = () => {
  const [seller, setLoginSeller] = useState({});
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <ProductPage />,

      path: "/",
      element: <SellerLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:
            seller && seller._id ? (
              <HomePage />
            ) : (
              <SellerLogin setLoginSeller={setLoginSeller} />
            ),
          children: [{ path: "/login", element: <SellerLogin /> }],
        },
        // { path: '/login', element: <SellerLogin /> },
        { path: "/register", element: <SellerRegister /> },
        // { path: '/register', element: <SellerRegister setLoginSeller={setLoginSeller} /> },
      ],
    },
    {
      // path: "/home",
      element: <SellerLoggedInLayout />,
      children: [
        {
          path: "/home",
          element: <ProductPage />,
        },
        // { path: '/products', element: <ProductPage /> },
        { path: "/addmart", element: <AddMart /> },
        { path: "/addproduct", element: <AddNewProduct /> },
        { path: "/home/productedit/:id", element: <EditProduct /> },
        { path: "/location", element: <Location /> },
      ],
    },
    { path: "/userlogin", element: <UserLoginPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
