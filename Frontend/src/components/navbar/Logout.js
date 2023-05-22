import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LogoutComponent = (prop) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("logout")
        // const { email, password } = seller
        axios.get("http://localhost:9002/logout")
            .then((res) => {
                navigate('/register')
            })
            .catch((error) => {
                console.error("Error during login:", error);
            });
    }

    return (
        <Button {...prop} variant='outlined' onClick={handleLogOut}>Logout</Button>

    )
}

export default LogoutComponent