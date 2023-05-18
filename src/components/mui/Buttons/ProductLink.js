import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styled from 'styled-components';
const ProductLink = styled(Link)`
  color: green;
  text-decoration: none;

  &:hover {
    color: #FF9A01;
    text-decoration: none;
  }
`;
export default ProductLink