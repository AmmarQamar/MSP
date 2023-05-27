import React from "react";
import { Link } from "react-router-dom";

export default function ProductLink(props) {
  // const { to, children } = props;

  return (
    <Link
      {...props}
      style={{
        // to: { to }
        fontSize: "12px",
        color: "black",
        textDecoration: "none",
        // underline: "none",
        "&:hover": {
          // color: "#FF9A01",
        },
      }}
    >
      {/* {children} */}
    </Link>
  );
}
