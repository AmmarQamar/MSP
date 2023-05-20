import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import styled from 'styled-components';
// const ProductButton = styled(Button)`
//   color: green;
//   text-decoration: none;
//   width:80px;
//   height:30px;
//   &:hover {
//     color: #FF9A01;
//     text-decoration: none;
//   }
// `;
export default function ProductButton(props) {
  const { children, ...otherProps } = props
  return (
    <Button {...props} sx={{
      height: "30px",
      width: "80px",
      '&:hover': {
        borderColor: "#FF9A01",
        color: "#FF9A01",

      }
    }} >{children}</Button>
  )
}