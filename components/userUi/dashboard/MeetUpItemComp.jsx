import React from "react";
import {
  DashboardGroupBox,
  MeetUpAvatar,
  MeetUpBox,
  MeetUpDetailBox,
} from "./dashboardStyles";
import { Stack, Typography } from "@mui/material";

import { More } from "iconsax-react";

function MeetUpItemComp() {
  return (
    <>
      <DashboardGroupBox compWidth={"100%"} elevation={0}>
        <MeetUpBox direction={"row"} spacing={2}>
          <MeetUpAvatar />
          <MeetUpDetailBox>
            <Stack
              direction={"row"}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography variant="bodyBold">Importance of Fruits</Typography>
              <More />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography variant="body">8pm</Typography>
              <Typography variant="body">25 Mar</Typography>
            </Stack>
          </MeetUpDetailBox>
        </MeetUpBox>
      </DashboardGroupBox>
    </>
  );
}

export default MeetUpItemComp;
