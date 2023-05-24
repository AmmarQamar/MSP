import { Button } from "@mui/material";
import React from "react";

const CancelButton = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      sx={{
        color: "#171E39",
        width: "auto",
        height: 30,
        fontSize: 11,
        "&:hover": {
          border: 1,
          color: "black",
        },
      }}
    />
  );
};

export default CancelButton;
