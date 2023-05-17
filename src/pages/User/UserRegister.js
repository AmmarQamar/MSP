import { Container, Box, TextField, Grid, Avatar, Typography, Checkbox, Button, Stack } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyIcon from '@mui/icons-material/Key';
import bgimg from '../images/backimg.jpg';
import bg from '../images/signin.svg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React from 'react';
import bg2 from '../images/backimg.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUpButton from '../css/Css';
import { Link } from '@mui/material';
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
                    // '&:hover': {
                    //   borderColor: 'red',
                    // },
                },
            },
        },
    },
});
const boxstyle = {
    position: "relative",
    // backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    margin: "auto",
    marginTop: 2,
    width: "50vw",
    height: "95vh",
    boxShadow: 25,
    // backgroundColor: "white",
    backgroundColor: "#3b33d5",
    borderRadius: 2,
    color: "white",
    fontSize: 14,
    '@media (max-width: 768px)': {
        width: "80vw",
        height: "100vh",
        marginTop: 0,
        borderRadius: 0,
        fontSize: 12,
    },

};
const center = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "auto",
    boxShadow: 30,
    paddingTop: 'min(10%, 2vw)',
};
export const UserRegister = () => {
    return (
        <body style={{
            backgroundColor: "#E3EBFB", height: "100vh", overflow: "hidden",
        }}>
            <ThemeProvider theme={theme} >
                <Box >
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
                                <Link href="/user_login" sx={{
                                    color: "white",
                                    textAlign: "center",
                                    '&:hover': {
                                        color: "#FF9A01",
                                        textDecoration: "none"

                                    }
                                }}>Already Account? SignIn</Link>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </body>
    )
}
