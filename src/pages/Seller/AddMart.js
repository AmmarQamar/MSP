
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, TextField, Grid, Avatar, Typography, Checkbox, Button, Stack, Input } from '@mui/material';
import { centerBox, fieldBox, field, fieldLabel } from './../../assests/css/AddMartCss';
import { styled } from "@mui/system";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import Currentlocation from '../../components/api/location/CurrentLocation';

const AddMart = () => {
    function handleClick() {
        <Link to="/currentlocation"></Link>
        // <Currentlocation />
    }
    return (
        <Box sx={{ backgroundColor: "#E3EBFB", height: "100vh", }} >
            <Box>
                <Box sx={centerBox} >
                    <Box sx={fieldBox}>
                        <Stack spacing={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12} sx={{ marginBottom: 3 }}>
                                    <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>Add Mart</Typography>
                                </Grid>
                                {/* Name */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Mart Title*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Description */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Mart Owner*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small"></TextField>
                                </Grid>
                                {/* Price */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Contact No*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7} >
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Quantity */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>City*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Insert Image */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Location*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <Link to="/currentlocation" >
                                        <Avatar
                                            sx={{ backgroundColor: "transparent", p: 2, margin: "auto", }}>
                                            <AddLocationAltOutlinedIcon onClick={handleClick}
                                                sx={{ cursor: "pointer", color: "black", fontSize: 30 }} >
                                            </AddLocationAltOutlinedIcon>
                                            {/* <Currentlocation /> */}
                                            {/* <Link to="/currentlocation" > </Link> */}
                                        </Avatar>

                                    </Link>

                                </Grid>
                                <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
                                    <Button variant="text" sx={{ color: "#7C7C7C", }}>Cancel</Button>
                                </Grid>
                                <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
                                    <Button variant="contained" sx={{ bgcolor: "#171E39", height: 30, fontSize: 11 }}>Save</Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box >)
}

export default AddMart;