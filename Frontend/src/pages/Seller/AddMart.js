
import React, { useState, useEffect } from 'react';
import { Box, Grid, Avatar, Button, Stack } from '@mui/material';
import { fieldBox, field } from './../../assests/css/AddMartCss';
import { boxstyle } from './../../assests/css/SellerRegisterCss'
import { centerBox } from './../../assests/css/AddMartCss'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AddMartTypography from '../../components/mui/Typography/AddMartTypography';
import AddMartTextField from '../../components/mui/TextField/AddMartTextField';
import { useLocation, useNavigate } from 'react-router-dom';
import LocationSelector from '../../components/api/location/Location';


const AddMart = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const [showLocationSelector, setShowLocationSelector] = useState(false);

    const handleLocationSelection = (location) => {
        setMart({ ...mart, location });
        setShowLocationSelector(false);
    };

    const [mart, setMart] = useState({
        title: '',
        owner: '',
        city: '',
        contact: '',
        location: ''
    })
    const handleChange = e => {
        const { name, value } = e.target
        setMart({ ...mart, [name]: value })
    }
    // function handleClick() {
    //     navigate("/currentlocation")
    // }

    // const handleLocationChange = (location) => {
    //     setMart({ ...mart, location });
    // };

    // const locationParam = new URLSearchParams(location.search).get('location');

    // Set the location in the state when the locationParam changes
    // useEffect(() => {
    //     if (locationParam) {
    //         setMart({ ...mart, location: locationParam });
    //     }
    // }, [locationParam]);

    // function handleLocationSelection(location) {
    //     // Redirect back to the AddMart component with the selected location as a URL parameter
    //     navigate(`/addmart?location=${location}`);
    // }

    // function handleClick() {
    //     navigate('/location');
    // }

    return (
        <Box sx={{ marginTop: 10 }} >
            {/* <Box sx={{ backgroundColor: "#E3EBFB", height: "100vh", marginTop: 10 }} > */}
            {/* <Box sx={boxstyle} > */}
            <Box sx={centerBox} >
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
                                <AddMartTextField name="owner" value={mart.owner}
                                    onChange={handleChange}
                                //  onChange={(event) => setMart({ ...mart, owner: event.target.value })}
                                ></AddMartTextField>
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
                                {!showLocationSelector && (
                                    <Button onClick={() => setShowLocationSelector(true)}>Select Location</Button>
                                )}
                            </Grid>

                            {showLocationSelector && (
                                <Grid item xs={12} lg={12}>
                                    <Box >
                                        <LocationSelector
                                            location={mart.location}
                                            setLocation={(location) => setMart({ ...mart, location })}
                                            onLocationSelection={handleLocationSelection}
                                        />
                                    </Box>
                                </Grid>
                            )}

                            {/* <Grid item xs={6} lg={6} sx={{ textAlign: "right" }}>
                                <Button variant="text" sx={{ color: "black", }}>Cancel</Button>
                            </Grid> */}
                            <Grid item xs={12} lg={12}>
                                <Button variant="contained" sx={{ margin: "auto", bgcolor: "#171E39", height: 30, width: "300px", fontSize: 11 }}>Save</Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>

        </Box >)
}

export default AddMart;