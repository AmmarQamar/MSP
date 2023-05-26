import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
const MartField = styled(TextField, {
  name: "MartField",
})({
  // ---------------Input---------------
  "& .MuiInputBase-root": {
    height: 35,
    width: "auto",
    fontSize: 13,
    color: "black",
    letterSpacing: 1,
  },
  //----- LABEL --------
  "& .MuiInputLabel-root": {
    fontSize: 11,
    color: "white",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "orange",
  },

  /* Hovered Label */
  "& .MuiInputLabel-root:hover": {
    color: "orange",
  },
  // ---------------OUTLINE BORDER---------------
  // outline textfield
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderColor: "black",
    },
  },
  //styles the outline hover
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "orange",
    },
  },
  // outline focus border
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "orange",
    },
    "& > label": {
      color: "orange",
    },
  },
});
const AddMartTextField = (props) => {
  const { name, value, onChange } = props;

  return (
    <MartField
      fullWidth
      required
      {...props}
      name={name}
      value={value}
      onChange={onChange}
    ></MartField>
  );
};

export default AddMartTextField;
