import { Box } from '@mui/material'
import React from 'react'
import UserTextField from "../../components/mui/TextField/UserTextField"

const UserLoginPage = () => {
    return (
        <Box sx={{ height: 300, backgroundColor: "red" }}>
            <UserTextField ></UserTextField>
        </Box>
    )
}

export default UserLoginPage