import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import { CustomButton } from '@/styles/globalComponentsStyle';
export const ContactContainer = styled(Stack)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10rem;
`

export const MessageButton = styled(CustomButton)`
  padding: 1.5rem;
`

export const FormContainer = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
