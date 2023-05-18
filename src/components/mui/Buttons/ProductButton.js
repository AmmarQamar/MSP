import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styled from 'styled-components';
const ProductButton = styled(Button)`
  color: green;
  text-decoration: none;
  width:80px;
  height:40px;
  &:hover {
    color: #FF9A01;
    text-decoration: none;
  }
`;
export default ProductButton