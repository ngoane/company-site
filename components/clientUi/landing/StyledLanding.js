import { Typography, Stack, Paper } from '@mui/material';
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
  background-color: #e2e2e2;
  padding: 2px;
`
export const LandingContainer = styled(Stack)`
  width: 100%;
  margin-top: 8rem;
`
