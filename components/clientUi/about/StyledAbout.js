import styled from "@emotion/styled";
import { Typography } from "@mui/material";


export const StyledSection = styled.section`
  width: 100%;
  background-image: url('/about/Image_1.svg'), None;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${( { theme }) => theme.palette.lightBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
`

export const CenterTypography = styled(Typography)`
  text-align: center;
`
