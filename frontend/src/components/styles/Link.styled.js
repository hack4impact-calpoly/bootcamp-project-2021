import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: ${({fs}) => fs};
  margin-left: ${({ml}) => ml};
  color: black;
`;
