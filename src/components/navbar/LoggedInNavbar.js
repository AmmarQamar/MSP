import { AppBar, Toolbar, Box, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoImage2 from './../../assests/images/logo2.png';
import { NavLink } from '../mui/Link'

const LoggedInNavbar = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }} elevation={0} >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} >
                    <img src={LogoImage2} alt="Logo" style={{ background: "none", height: 40 }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", width: "40vw", marginRight: "50px" }}>
                    <NavLink to='/addmart'>Home</NavLink>
                    <NavLink to='/addmart'>About</NavLink>
                    <NavLink to='/addproduct' >New Product</NavLink>
                    {/* <StyledNavLink to='/sellerlogin'>Login</StyledNavLink>
                    <StyledNavLink to='/sellerregister'>SignUp</StyledNavLink> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default LoggedInNavbar;
