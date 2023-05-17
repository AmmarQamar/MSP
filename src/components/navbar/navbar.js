import { AppBar, Toolbar, Box, IconButton, Typography, Button } from '@mui/material';
import LogoImage2 from './../../assests/images/logo2.png';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} >
                    <img src={LogoImage2} alt="Logo" style={{ background: "none", height: 40 }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Typography sx={{ mr: 4 }}>Login</Typography>
                    <Typography>SignUp</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
