import React, { useState, useEffect } from "react";
import { Box, Grid, Avatar, Button, Stack } from "@mui/material";
import { fieldBox, field } from "./../../assests/css/AddMartCss";
import { centerBox } from "./../../assests/css/AddMartCss";
import AddMartTypography from "../../components/mui/Typography/AddMartTypography";
import AddMartTextField from "../../components/mui/TextField/AddMartTextField";
import { useLocation, useNavigate } from "react-router-dom";
import LocationSelector from "../../components/api/location/Location";
import axios from "axios";

const AddMart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLocationSelector, setShowLocationSelector] = useState(false);

  const handleLocationSelection = (location) => {
    setMart({ ...mart, location });
    setShowLocationSelector(false);
  };

  const [mart, setMart] = useState({
    title: "",
    owner: "",
    contact: "",
    address: "",
    location: {
      lat: "",
      lng: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMart({ ...mart, [name]: value });
  };
  const handleSubmit = () => {
    const { title, owner, address, contact, location } = mart;
    if (title && owner && address && contact && location) {
      debugger;

      axios
        .post("http://localhost:9002/seller/addmart", mart)
        .then((res) => {
          console.log("Successfully Registered Mart");
          alert(res.data.message);
          navigate("/addproduct");
        })
        .catch(() => {
          alert("Mart Not Registered Api not work");
        });
    } else {
      alert("Please Fill all fields");
    }
  };

  return (
    <Box sx={{ marginTop: 10 }}>
      <Box></Box>

      <Box sx={centerBox}>
        <Box sx={fieldBox}>
          <Stack spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12} sx={{ marginBottom: 3 }}>
                <AddMartTypography
                  variant="h6"
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Add Mart
                </AddMartTypography>
              </Grid>
              {/* Name */}
              <Grid item xs={12} lg={5} sx={field}>
                <AddMartTypography>Mart Title*</AddMartTypography>
              </Grid>
              <Grid item xs={12} lg={7}>
                <AddMartTextField
                  name="title"
                  value={mart.title}
                  onChange={handleChange}
                ></AddMartTextField>
              </Grid>
              {/* Description */}
              <Grid item xs={12} lg={5} sx={field}>
                <AddMartTypography>Mart Owner*</AddMartTypography>
              </Grid>
              <Grid item xs={12} lg={7}>
                <AddMartTextField
                  name="owner"
                  value={mart.owner}
                  onChange={handleChange}
                  //  onChange={(event) => setMart({ ...mart, owner: event.target.value })}
                ></AddMartTextField>
              </Grid>
              {/* Price */}
              <Grid item xs={12} lg={5} sx={field}>
                <AddMartTypography>Contact No*</AddMartTypography>
              </Grid>
              <Grid item xs={12} lg={7}>
                <AddMartTextField
                  name="contact"
                  value={mart.contact}
                  onChange={handleChange}
                ></AddMartTextField>
              </Grid>
              {/* Quantity */}
              <Grid item xs={12} lg={5} sx={field}>
                <AddMartTypography>Address*</AddMartTypography>
              </Grid>
              <Grid item xs={12} lg={7}>
                <AddMartTextField
                  name="address"
                  value={mart.address}
                  onChange={handleChange}
                ></AddMartTextField>
              </Grid>
              {/* Insert Image */}
              <Grid item xs={12} lg={5} sx={field}>
                <AddMartTypography>Location*</AddMartTypography>
              </Grid>
              <Grid item xs={12} lg={7}>
                {!showLocationSelector && (
                  <Button onClick={() => setShowLocationSelector(true)}>
                    Select Location
                  </Button>
                )}
              </Grid>

              {showLocationSelector && (
                <Grid item xs={12} lg={12}>
                  <Box>
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
              <Grid
                item
                xs={12}
                lg={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#171E39",
                    height: 30,
                    marginTop: 4,
                    width: 200,
                    fontSize: 11,
                  }}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AddMart;
