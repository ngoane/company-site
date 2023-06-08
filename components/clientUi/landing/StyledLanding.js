import { Typography, Stack, Paper, Accordion } from '@mui/material';
import styled from '@emotion/styled';
import { RoundedButton } from '@/styles/globalComponentsStyle';
import Image from 'next/image';

export const CenterTypography = styled(Typography)`
  text-align: center;
`

export const StyledPaper = styled(Paper)`
  padding: 4rem;
`

export const SpaceStack = styled(Stack)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const QuickAccessButton = styled(RoundedButton)`
  width: 25%;
  padding: 9px;
`

export const StyledStack = styled(Stack)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.violetBg};
`

export const CustomStack = styled(SpaceStack)`
  gap: 16rem;
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const StyledImg = styled(Image)`
  border-radius: 100%;
  padding: 4px;
`
export const LandingContainer = styled(Stack)`
  width: 100%;
  margin-top: 8rem;
`

export const StyledAccordion = styled(Accordion)`
  box-shadow: none;
  border: none;
  &:before: {
    display: none;
  }
  background-color: transparent;
`

export const FAQTypography = styled(Typography)`
  color: rgb(58, 58, 58);
`