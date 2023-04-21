import styled from "@emotion/styled";

import { Button } from "@mui/material";

export const MainWrapper = styled.main`
  margin-top: 5rem;
`;

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
