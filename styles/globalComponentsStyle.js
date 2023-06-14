import styled from "@emotion/styled";

import { Button, Stack, Table, TableCell, TableHead } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Link from "next/link";

export const MainWrapper = styled.main`
  margin-top: 5rem;
`;

export const CompBody = styled.section`
  padding: 0 3rem;
`;

export const CustomButton = styled(Button)`
  text-transform: none;
`;

// export const CustomButtonRounded = styled(Button)`
//   border-radius: 5rem;
//   box-shadow: none;
//   text-transform: none;
// `;

export const RoundedButton = styled(Button)`
  border-radius: 5rem;
  box-shadow: none;
  text-transform: none;
`;

export const WhiteButton = styled(Button)`
  background-color: white;
  color: #9138e8;
  text-transform: none;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: white;
  text-transform: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const AdminTextButton = styled(TextButton)`
  color: ${({ theme }) => theme.palette.textColor};
  &:hover {
    background-color: transparent;
  }
`;

export const NavLinkWhiteText = styled(Link)`
  outline: none;
  border: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  background-color: transparent;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const NavLinkWhiteButton = styled(Link)`
  outline: none;
  border: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 0.9rem;
  background-color: white;
  text-transform: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const FooterNavLink = styled(NavLinkWhiteText)`
  color: #3a3a3a;
  padding: 0rem;
  border-radius: 0rem;
  &:hover {
    background-color: transparent;
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

// custom table components styles

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.violetBg,
    color: theme.palette.textColor,
    fontWeight: 700,
    fontSize: 14,
    padding: "0.6rem 1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const StyledTable = styled(Table)`
  &.MuiTable-root {
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;
