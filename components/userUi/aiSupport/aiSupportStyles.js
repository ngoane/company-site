import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const AisupportBodyContainer = styled.main`
  position: relative !important;
  width: 100%;
  height: 85.5vh;
  background-color: ${({ theme }) => theme.palette.whiteBg};
`;

export const AiSupportBody = styled.section`
  width: 100%;
  height: 90%;
  border: 1px solid red;
`;

//enquiry input comp styles

export const AiSupportInputContainer = styled(Stack)`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  width: 80%;
  /* margin: auto; */
  padding: 1rem;
  border: 2px solid red;
`;
