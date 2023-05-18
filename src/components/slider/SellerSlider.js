import { Box } from '@mui/material'
import React from 'react'
import slider1 from '../../assests/images/slider/slider1.jpg'
const SellerSlider = () => {
    return (
        <Box sx={{ height: '500px', backgroundImage: `url(${slider1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            {/* <img src={slider1} /> */}
        </Box >
    )
}

export default SellerSlider