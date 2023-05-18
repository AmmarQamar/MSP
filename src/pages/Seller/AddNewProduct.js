
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Grid, Avatar, Typography, Button, Stack, Input } from '@mui/material';
import { centerBox, fieldBox, field } from './../../assests/css/AddMartCss';
// import { styled } from "@mui/system";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const AddNewProduct = () => {
    return (
        <Box sx={{
            backgroundColor: "#E3EBFB",
            height: "100vh",
            // '@media (max-height: 700px)': {
            //     margin: 0,
            //     height: '100%',
            //     backgroundColor: "#E3EBFB",
            // },
        }} >
            <Box>
                <Box sx={centerBox}  >
                    <Box sx={fieldBox}>
                        <Stack spacing={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12} sx={{ marginBottom: 3 }}>
                                    <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>Add Product</Typography>
                                </Grid>
                                {/* Name */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Name*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Description */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Description*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small"></TextField>
                                </Grid>
                                {/* Price */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Quantity*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7} >
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Quantity */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Price*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Insert Image */}
                                <Grid item xs={12} lg={5} sx={field}>
                                    <Typography sx={{ fontSize: 12 }}>Ad Image*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <Avatar
                                        sx={{ backgroundColor: "transparent", p: 2, margin: "auto", }}>
                                        <AddPhotoAlternateIcon onClick={() => document.getElementById('image-input').click()}
                                            sx={{ cursor: "pointer", color: "black", fontSize: 30 }} >
                                        </AddPhotoAlternateIcon>
                                        <Input id="image-input"
                                            type="file" style={{ display: 'none' }}></Input>
                                    </Avatar>

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

export default AddNewProduct