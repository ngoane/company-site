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

export const NavLink = styled(Link)`
  outline: none;
  border: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  background-color: transparent;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const NavLinkWhite = styled(Link)`
  outline: none;
  border: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.palette.primary};
  font-size: 0.9rem;
  background-color: white;
  text-transform: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #f8f9fa;
  }
`;
