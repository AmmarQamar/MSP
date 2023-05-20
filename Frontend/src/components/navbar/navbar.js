import { AppBar, Toolbar, Box, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoImage2 from './../../assests/images/logo2.png';
import { StyledNavLink } from './../../components/mui/Link'

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#E3EBFB", color: "black" }} elevation={0} >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} >
                    <img src={LogoImage2} alt="Logo" style={{ background: "none", height: 40 }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "15vw" }}>
                    <StyledNavLink to='/sellerlogin'>Login</StyledNavLink>
                    <StyledNavLink to='/sellerregister'>SignUp</StyledNavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
