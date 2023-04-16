import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  RoundedButton,
  WhiteButton,
  TextButton,
} from "@/styles/globalComponentsStyle";
import NavComp from "@/components/navigation/NavComp";

const HomePage = () => {
  return (
    <div>
      <NavComp />
      <Typography variant="headerMainBold" color={""}>
        HOME
      </Typography>

      <RoundedButton variant="contained" size="small">
        Custom
      </RoundedButton>
      <Box sx={{ bgcolor: "#9138e8" }}>
        <WhiteButton>custom</WhiteButton>
        <TextButton>Custom</TextButton>
      </Box>
    </div>
  );
};

export default HomePage;
