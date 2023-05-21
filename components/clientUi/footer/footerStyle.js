import styled from "@emotion/styled";
import { Stack, Box, TextField } from "@mui/material";

export const FooterContainer = styled(Box)`
  margin-top: 5rem;
  width: 100%;
  padding: 4rem 4rem 2rem 4rem;
  background-color: ${({ theme }) => theme.palette.violetBg};
`;

export const FooterTopContainer = styled(Stack)`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FooterLogo = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
`;

export const FooterBottomContainer = styled(FooterTopContainer)`
  margin: 4rem 0rem 3rem 0rem;
`;

export const FooterLinkContainer = styled(Stack)`
  flex-direction: row;
  gap: 2rem;
`;

export const FooterEmailTextField = styled(TextField)`
  background-color: white;
  width: 100%;
`;
