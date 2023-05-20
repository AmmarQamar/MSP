import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            {/* <Footer /> */}
        </>
    )
}

export default UserLayout