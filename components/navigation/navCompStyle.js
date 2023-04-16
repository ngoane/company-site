import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const Nav = styled(AppBar)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.img`
  width: 10rem;
`;
