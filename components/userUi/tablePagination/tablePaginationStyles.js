import styled from "@emotion/styled";
import { Button, Paper, Stack } from "@mui/material";

export const TablePaginationContainer = styled(Paper)`
  width: 100%;
`;

export const TablePaginationBox = styled(Stack)`
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const NumberBox = styled.p`
  padding: 0.5rem;
  font-size: 14px;
`;

export const PaginationButton = styled(Button)`
  &.MuiButton-outlined {
    border-color: #70657a;
    color: #70657a;
  }
  &.MuiButton-root {
    text-transform: lowercase;
  }
`;

export const TableIconBox = styled.i`
  border: ${({ active }) => (active ? "1px solid white" : "1px solid #70657a")};
  border-radius: 0.2rem;
  display: grid;
  place-content: center;
`;
