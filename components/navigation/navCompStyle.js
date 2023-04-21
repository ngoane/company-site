import styled from "@emotion/styled";
import { AppBar, Stack } from "@mui/material";
import Link from "next/link";

export const Nav = styled(AppBar)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.palette.primary};
`;

export const InnerNav = styled(Stack)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.img`
  width: 10rem;
`;

export const NavLinkContainer = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
