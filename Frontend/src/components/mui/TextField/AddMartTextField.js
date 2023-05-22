import React from 'react'
import { TextField } from '@mui/material'
import { CustomTextField } from './SignUpTextField'
const AddMartTextField = (props) => {

    return (
        <CustomTextField {...props} fullWidth required  ></CustomTextField >

    )
}

export default AddMartTextField