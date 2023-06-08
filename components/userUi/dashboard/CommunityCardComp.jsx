import React from "react";
import {
  CommunityCard,
  CommunityCardContainer,
  CommunityMedia,
} from "./dashboardStyles";
import { Button, CardContent, Typography } from "@mui/material";
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
          <RoundedButton color="primary" variant={"contained"} fullWidth>
            Join
          </RoundedButton>
          {/* <Button color={"primary"}>Join</Button> */}
        </CommunityCard>
      </CommunityCardContainer>
    </>
  );
};

export default CommunityCardComp;
