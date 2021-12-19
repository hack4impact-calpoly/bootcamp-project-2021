import React from "react";
import {
  StyledNavbar,
  Title,
  LinkDiv,
} from "./styles/Navbar.styled";

import { StyledLink } from "./styles/Link.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <h1>Sam's Italian Recipebook</h1>
      <LinkDiv>
        <StyledLink ml="10px" to="/about">About Me!</StyledLink>
        <StyledLink ml="10px" to="/">Home</StyledLink>
      </LinkDiv>
    </StyledNavbar>
  );
}
