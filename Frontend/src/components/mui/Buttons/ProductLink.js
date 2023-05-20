import React from 'react';
import { Link } from '@mui/material';

export default function ProductLink(props) {
  const { children, ...otherProps } = props;

  return (
    <Link {...props} sx={{
      fontSize: "12px",
      color: "black",
      textDecoration: "none",
      '&:hover': {
        // color: "#FF9A01",

      }
    }}>{children}</Link>
  );
}
