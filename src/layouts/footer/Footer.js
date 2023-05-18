import { Box } from "@mui/material";

function Footer() {

    return (
        <footer>
            <Box sx={{
                height: 40,
                backgroundColor: "black",
                color: "white",
                textAlign: 'center',
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <p>Footer Text</p>
            </Box>
        </footer>
    )
}

export default Footer;