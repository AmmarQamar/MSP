import { Typography } from '@mui/material'
import React from 'react'

const AddMartTypography = (props) => {
    // const { children, ...otherprops } = props
    return (
        <Typography {...props} sx={{ fontSize: 12, color: "white" }} ></Typography>
    )
}

export default AddMartTypography