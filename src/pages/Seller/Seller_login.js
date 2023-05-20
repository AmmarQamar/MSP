import {
    Container,
    Box,
    Grid,
    Avatar,
    Typography,
    Checkbox,
    Button,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React, { useState } from 'react';
import bg from './../../assests/images/signin.svg';
import SignUpButton from './../../assests/css/SIgnupButton'
import { StyledLink } from '../../components/mui/Link';
import { boxstyle, center } from './../../assests/css/MidBoxStyle'
import LoginTextField from '../../components/mui/TextField/LoginTextField';

export const SellerLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);



    const hanldeClick = () => {
        if (email && password) {
            console.log("Login Successful")
        }
    }
    return (

        <div style={{
            color: "#f5f5f5",
        }}>
            <Box sx={boxstyle} >
                <Grid container >
                    {/* For Image */}
                    <Grid item sm={12} md={6} lg={6}>
                        <Box
                            sx={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                marginTop: "40px",
                                marginLeft: "15px",
                                marginRight: "15px",
                                height: "63vh",
                                color: "#f5f5f5",
                            }}
                        ></Box>
                    </Grid>
                    {/* For Fields */}
                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                backgroundColor: "#3b33d5",
                                height: "100%",
                                backgroundSize: "cover",
                                minHeight: "300px",
                                pl: 10,
                                pr: 10,
                            }}>
                            <Container sx={center} >
                                <Avatar
                                    sx={{ p: 1, mt: 2, bgcolor: "#ffffff" }}>
                                    <LockOpenIcon sx={{ color: "black" }} />
                                </Avatar>
                                <Typography variant="h5">
                                    SELLER LOGIN
                                </Typography>
                            </Container>
                            {/* User Inputs */}
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} lg={12} sx={{ marginTop: 2 }}>
                                        <LoginTextField value={email} label="Email" onChange={e => setEmail(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} lg={12} sx={{ mt: 2, mb: 2 }}>
                                        <LoginTextField value={email} label="Password" onChange={e => setPassword(e.target.value)} />

                                    </Grid>
                                    <Grid container style={{ marginTop: 2 }}>
                                        <Grid item xs={8} lg={8}>
                                            <FormControlLabel

                                                label={
                                                    <Typography style={{ fontSize: 12 }}>
                                                        Remember Me
                                                    </Typography>
                                                }
                                                control={<Checkbox
                                                    value={check}
                                                    onChange={e => setCheck(e.target.value)}
                                                    size='small' defaultChecked sx={{
                                                        color: "white",
                                                        '&.Mui-checked': {
                                                            color: `#ffff`
                                                        },
                                                    }} />}
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={4}  >
                                            <Typography style={{
                                                marginTop: 10,
                                                fontSize: 12,
                                                cursor: "pointer",
                                            }}
                                                sx={{
                                                    '&:hover': {
                                                        color: "#FF9A01"
                                                    },
                                                }}
                                            >
                                                Forget Password?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        onChange={hanldeClick}

                                        variant='contained'
                                        sx={SignUpButton}>SIGN IN
                                    </Button>
                                    <Typography variant='span'
                                        sx={{
                                            fontSize: "12px",
                                            width: "100%",
                                            mt: 2,
                                            cursor: "pointer",
                                            textAlign: "center",
                                            color: "white",
                                            underline: "none",

                                        }}>
                                        <StyledLink to='/sellerregister' sx={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                color: 'red',
                                                textDecoration: 'none',
                                            },
                                        }}>Not registered yet? Create an Account</StyledLink></Typography>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


        </div >
    )
}
