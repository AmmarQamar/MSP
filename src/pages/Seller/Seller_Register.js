import { Container, Box, TextField, Grid, Avatar, Typography, Checkbox, Button, Stack } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import SignUpButton from './../../assests/css/SIgnupButton'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledLink } from '../../components/mui/Link';
import { boxstyle, center } from './../../assests/css/SellerRegisterCss'

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white', // change label text color
          fontSize: 10,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        // size: 'small',
        sx: {
          // user input
          '& input': {
            color: 'white', // user input color
            fontSize: '12px', // User Input
          },

          '& fieldset': {
            borderColor: 'white', // change border color
            fontSize: 10,
            height: 50,
          },
          // '&:hover fieldset': {
          //   borderColor: 'white',
          // },
          // '&:hover': {
          //   borderColor: 'red',
          // },

        },
      },
    },
  },
});

export const SellerRegister = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxstyle}>
        <Box sx={center}>
          <Stack spacing={2}>
            <div style={{ margin: "auto", }}>
              <Avatar
                sx={{ p: 1, bgcolor: "#ffffff", margin: "auto" }}>
                <LockOpenIcon sx={{ color: "black" }} />
              </Avatar>
              <Typography variant="h5" sx={{ mt: 1 }} >
                REGISTRATION
              </Typography>
            </div>
            <TextField label="Full Name"></TextField>
            <TextField label="Email"></TextField>
            <TextField label="Password"></TextField>
            <TextField label="Phone No"></TextField>
            <TextField label="Location"></TextField>
            <Button variant="contained" sx={SignUpButton}> SignUp</Button>
            <StyledLink to='/sellerlogin' style={{ textAlign: "center" }}>Already Account? SignIn</StyledLink>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>

  )
}
