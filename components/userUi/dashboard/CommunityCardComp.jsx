import React from "react";
import {
  CommunityCard,
  CommunityCardContainer,
  CommunityMedia,
} from "./dashboardStyles";
import { CardContent, Typography } from "@mui/material";
import { RoundedButton } from "@/styles/globalComponentsStyle";

const CommunityCardComp = () => {
  return (
    <>
      <CommunityCardContainer elevation={0}>
        <CommunityCard>
          <CommunityMedia />
          <CardContent>
            <Typography variant="bodyBold">Arthritis Community</Typography>
            <Typography variant="caption">Arthritis</Typography>
          </CardContent>
          <RoundedButton>Join</RoundedButton>
        </CommunityCard>
      </CommunityCardContainer>
    </>
  );
};

export default CommunityCardComp;
