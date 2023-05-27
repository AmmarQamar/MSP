import React from "react";
import { Typography } from "@mui/material";
export default function CardTypographyconst(props) {
  const { value, ...otherProps } = props;
  const values =
    value && typeof value === "string" ? value.slice(0, 35) : value;

  return (
    <Typography {...props} sx={{ fontSize: 14, mb: 1, fontWeight: "bold" }}>
      {values}
    </Typography>
  );
}
