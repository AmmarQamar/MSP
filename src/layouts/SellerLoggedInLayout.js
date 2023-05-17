import React from 'react'
import { Outlet } from 'react-router-dom'
import LoggedInNavbar from '../components/navbar/LoggedInNavbar'
export const SellerLoggedInLayout = () => {
    return (
        <>
            <LoggedInNavbar />
            <Outlet ></Outlet>
        </>
    )
}
