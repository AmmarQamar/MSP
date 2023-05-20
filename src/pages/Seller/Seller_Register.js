import {
  Box,
  Avatar,
  Typography,
  Button,
  Stack
} from '@mui/material';
import SignUpButton from './../../assests/css/SIgnupButton'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React, { useState } from 'react';
import { StyledLink } from '../../components/mui/Link';
import { boxstyle, center } from './../../assests/css/SellerRegisterCss'
import SignUpTextField from '../../components/mui/TextField/SignUpTextField';

export const SellerRegister = () => {
  const [seller, setSeller] = useState({
    fullname: '',
    email: '',
    password: '',
    phoneno: '',
    address: '',
  });
  const handleChange = e => {
    const { name, value } = e.target
    setSeller({ ...seller, [name]: value })
  }
  return (
    <Box sx={boxstyle}>
      <Box sx={center}>
        <div style={{ margin: "auto", }}>
          <Avatar
            sx={{ p: 1, bgcolor: "#ffffff", margin: "auto" }}>
            <LockOpenIcon sx={{ color: "black" }} />
          </Avatar>
          <Typography variant="h6" sx={{ mt: 1, mb: 1, textAlign: "center" }} >
            REGISTRATION
          </Typography>
        </div>
        <Stack spacing={2}>
          <SignUpTextField name="fullname" label="Full Name" value={seller.fullname}
            onChange={handleChange}
          ></SignUpTextField>
          <SignUpTextField name="email" label="Email" value={seller.email}
            onChange={handleChange}
          ></SignUpTextField>
          <SignUpTextField name="password" label="Password" value={seller.password}
            onChange={handleChange}
          ></SignUpTextField>
          <SignUpTextField name="phoneno" label="Phone No" value={seller.phoneno}
            onChange={handleChange}
          ></SignUpTextField>
          <SignUpTextField name="address" label="Address" value={seller.address}
            onChange={handleChange}
          ></SignUpTextField>
          <Button variant="contained"
            sx={SignUpButton}
          // onClick={handleSubmit}
          > SignUp</Button>
          <StyledLink to='/sellerlogin' style={{ textAlign: "center" }}>Already Account? SignIn</StyledLink>
        </Stack>
      </Box>
    </Box>
  )
}
