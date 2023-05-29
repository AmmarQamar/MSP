import {
  Container,
  Box,
  Grid,
  Avatar,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React, { useState } from "react";
import SignUpButton from "./../../assests/css/SIgnupButton";
import { StyledLink } from "../../components/mui/Link";
import {
  boxstyle,
  center,
  rightcontainer,
  sideimg,
} from "./../../assests/css/MidBoxStyle";
import axios from "axios";
import LoginTextField from "../../components/mui/TextField/LoginTextField";
import { useNavigate } from "react-router-dom";

export const SellerLogin = ({ setLoginSeller }) => {
  const navigate = useNavigate();
  const [seller, setSeller] = useState({
    email: "",
    password: "",
    check: false,
  });
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "check") {
      setSeller({ ...seller, [name]: checked });
    } else {
      setSeller({ ...seller, [name]: value });
    }
  };
  const handleSubmit = () => {
    const { email, password } = seller;
    if (email && password) {
      axios
        .post("http://localhost:9002/seller/login", seller)
        .then((res) => {
          if (res.data.message === "Password incorrect") {
            alert("Invalid Password");
          } else {
            debugger;
            setLoginSeller(res.data.seller);
            console.log(res.data.token);

            navigate("/addmart");
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Fill all fields");
    }
  };
  return (
    <div
      style={{
        color: "#f5f5f5",
      }}
    >
      <Box sx={boxstyle}>
        <Grid container>
          {/* For Image */}
          <Grid item sm={12} md={6} lg={6}>
            <Box sx={sideimg}></Box>
          </Grid>
          {/* For Fields */}
          <Grid item xs={12} lg={6}>
            <Box sx={rightcontainer}>
              <Container sx={center}>
                <Avatar sx={{ p: 1, mt: 2, bgcolor: "#ffffff" }}>
                  <LockOpenIcon sx={{ color: "black" }} />
                </Avatar>
                <Typography variant="h5">SELLER LOGIN</Typography>
              </Container>
              {/* User Inputs */}
              <Box>
                <Grid container>
                  <Grid item xs={12} lg={12} sx={{ marginTop: 2 }}>
                    <LoginTextField
                      value={seller.email}
                      label="Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12} sx={{ mt: 2, mb: 2 }}>
                    <LoginTextField
                      value={seller.password}
                      label="Password"
                      name="password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid container style={{ marginTop: 2 }}>
                    <Grid item xs={8} lg={8}>
                      <FormControlLabel
                        label={
                          <Typography style={{ fontSize: 12 }}>
                            Remember Me
                          </Typography>
                        }
                        control={
                          <Checkbox
                            checked={seller.check}
                            name="check"
                            onChange={handleChange}
                            size="small"
                            // defaultChecked
                            sx={{
                              color: "white",
                              "&.Mui-checked": {
                                color: `#ffff`,
                              },
                            }}
                          />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Typography
                        style={{
                          marginTop: 10,
                          fontSize: 12,
                          cursor: "pointer",
                        }}
                        sx={{
                          "&:hover": {
                            color: "#FF9A01",
                          },
                        }}
                      >
                        Forget Password?
                      </Typography>
                    </Grid>
                  </Grid>

                  <Button
                    variant="contained"
                    sx={SignUpButton}
                    onClick={handleSubmit}
                  >
                    {" "}
                    SIGN IN
                  </Button>
                  <Typography
                    variant="span"
                    sx={{
                      fontSize: "12px",
                      width: "100%",
                      mt: 2,
                      cursor: "pointer",
                      textAlign: "center",
                      color: "white",
                      underline: "none",
                    }}
                  >
                    <StyledLink
                      to="/register"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": {
                          color: "red",
                          textDecoration: "none",
                        },
                      }}
                    >
                      Not registered yet? Create an Account
                    </StyledLink>
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
