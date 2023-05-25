import React from "react";
import { Typography, Container } from "@mui/material";
import { LandingIntro } from "@/components/landing/Landing"; 
import { LandingContainer } from "@/components/landing/StyledLanding"; 

const HomePage = () => {
  return (
    <LandingContainer spacing={12}>
      <LandingIntro />
    </LandingContainer>
  );
};

export default HomePage;
