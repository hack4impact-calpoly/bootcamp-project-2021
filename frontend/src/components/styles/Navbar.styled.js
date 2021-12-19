import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};
  border: 2px solid black;

  h1 {
    color: ${({ theme }) => theme.colors.headerText};
    background-color: ${({ theme }) => theme.colors.header}
    margin-left: 500px;
  }
`;

export const LinkDiv = styled.div`
  align-self: center;
  margin-right: 20px;
  font-size: large;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.headerText};
    background-color: ${({ theme }) => theme.colors.header}
    margin-left: 1500px;
`;
