
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Grid, Avatar, Button, Stack } from '@mui/material';
import { centerBox, fieldBox, field } from './../../assests/css/AddMartCss';
import { boxstyle, center } from './../../assests/css/SellerRegisterCss'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import Currentlocation from '../../components/api/location/CurrentLocation';
import AddMartTypography from '../../components/mui/Typography/AddMartTypography';
import AddMartTextField from '../../components/mui/TextField/AddMartTextField';


const AddMart = () => {
    const [mart, setMart] = useState({
        title: '',
        owner: '',
        city: '',
        contact: '',
        city: '',

    })
    const handleChange = e => {
        const { name, value } = e.target
        setMart({ ...mart, [name]: value })
    }
    function handleClick() {
        <Link to="/currentlocation"></Link>
        // <Currentlocation />
    }
    return (
        <Box sx={{ marginTop: 10 }} >
            {/* <Box sx={{ backgroundColor: "#E3EBFB", height: "100vh", marginTop: 10 }} > */}
            <Box sx={boxstyle} >
                <Box sx={fieldBox}>
                    <Stack spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={12} sx={{ marginBottom: 3 }}>
                                <AddMartTypography variant="h6" style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>Add Mart</AddMartTypography>
                            </Grid>
                            {/* Name */}
                            <Grid item xs={12} lg={5} sx={field}>
                                <AddMartTypography >Mart Title*</AddMartTypography>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <AddMartTextField name="title" value={mart.title} onChange={handleChange} ></AddMartTextField>
                            </Grid>
                            {/* Description */}
                            <Grid item xs={12} lg={5} sx={field}>
                                <AddMartTypography >Mart Owner*</AddMartTypography>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <AddMartTextField name="owner" value={mart.owner} onChange={handleChange}></AddMartTextField>
                            </Grid>
                            {/* Price */}
                            <Grid item xs={12} lg={5} sx={field}>
                                <AddMartTypography>Contact No*</AddMartTypography>
                            </Grid>
                            <Grid item xs={12} lg={7} >
                                <AddMartTextField name="contact" value={mart.contact} onChange={handleChange}></AddMartTextField>
                            </Grid>
                            {/* Quantity */}
                            <Grid item xs={12} lg={5} sx={field}>
                                <AddMartTypography>City*</AddMartTypography>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <AddMartTextField name="city" value={mart.city} onChange={handleChange}></AddMartTextField>
                            </Grid>
                            {/* Insert Image */}
                            <Grid item xs={12} lg={5} sx={field}>
                                <AddMartTypography>Location*</AddMartTypography>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <Link to="/currentlocation" >
                                    <Avatar
                                        sx={{ backgroundColor: "transparent", p: 2, margin: "auto", }}>
                                        <AddLocationAltOutlinedIcon onChange={handleClick}
                                            sx={{ cursor: "pointer", color: "white", fontSize: 30 }} >
                                        </AddLocationAltOutlinedIcon>
                                        <Currentlocation />
                                        <Link to="/currentlocation" > </Link>
                                    </Avatar>

                                </Link>

                            </Grid>
                            <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
                                <Button variant="text" sx={{ color: "black", }}>Cancel</Button>
                            </Grid>
                            <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
                                <Button variant="contained" sx={{ bgcolor: "#171E39", height: 30, fontSize: 11 }}>Save</Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>

        </Box >)
}

export default AddMart;