import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const FooterContainer = styled(Stack)`
  margin-top: 5rem;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.violetBg};
`;
