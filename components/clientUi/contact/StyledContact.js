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

  export const StyledSection = styled.section`
  width: 100%;
  background-image: url('/contact/hero.svg'), None;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(146, 56, 232, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12%;
  padding-bottom: 12%;
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
