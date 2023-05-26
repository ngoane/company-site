import React from "react";
import { Typography, Container } from "@mui/material";
import { LandingIntro } from "@/components/clientUi/landing/Landing";
import { LandingContainer } from "@/components/clientUi/landing/StyledLanding";

const HomePage = () => {
  return (
    <LandingContainer spacing={12}>
      <LandingIntro />
    </LandingContainer>
  );
};

export default HomePage;
