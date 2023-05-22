import { AppBar, Toolbar, Box, } from '@mui/material';
import LogoImage2 from './../../assests/images/logo2.png';
import { NavLink } from '../mui/Link'
// import SearchProduct from './SearchProduct';
import Logout from "./Logout"

const LoggedInNavbar = () => {

    // const handleLogOut = () => {
    // }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }} elevation={0} >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} >
                    <img src={LogoImage2} alt="Logo" style={{ background: "none", height: 40 }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", width: "40vw", marginRight: "50px" }}>
                    <NavLink to='/products'>Home</NavLink>
                    <NavLink to='/addmart'>About</NavLink>
                    <NavLink to='/addproduct' >New Product</NavLink>
                </Box>
                <Box >
                    <Logout />
                    {/* <SearchProduct /> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default LoggedInNavbar;
