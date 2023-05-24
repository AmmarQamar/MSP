import { Button } from "@mui/material";
import React from "react";

const AddButton = (props) => {
  return (
    <Button
      {...props}
      sx={{
        color: "white",
        width: "auto",
        bgcolor: "#171E39",
        height: 30,
        fontSize: 11,
        "&:hover": {
          backgroundColor: "aqua",
          color: "black",
        },
      }}
    />
  );
};

export default AddButton;
