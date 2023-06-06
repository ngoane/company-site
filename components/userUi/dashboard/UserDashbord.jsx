import React from "react";
import {
  DashboardContainer,
  DashboardGroupBox,
  DashboardInnerLeftContainer,
  DashboardInnerRightContainer,
} from "./dashboardStyles";
import DashboardVitals from "./DashboardVitals";
import DashboardChart from "./DashboardChart";
import Activities from "./Activities";
import { Stack, Typography } from "@mui/material";

const UserDashbord = () => {
  return (
    <>
      <DashboardContainer direction={"row"} spacing={2}>
        <DashboardInnerLeftContainer>
          <DashboardVitals />
          <DashboardChart />
          <Activities />
        </DashboardInnerLeftContainer>

        <DashboardInnerRightContainer>
          <DashboardGroupBox compWidth={"100%"} elevation={0}>
            <Stack
              direction={"row"}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <div>
                <Typography variant="bodyBold">27yrs</Typography>
                <Typography variant="body">Age</Typography>
              </div>

              <div>
                <Typography variant="bodyBold">70kg</Typography>
                <Typography variant="body">Weight</Typography>
              </div>

              <div>
                <Typography variant="bodyBold">1.3m</Typography>
                <Typography variant="body">Height</Typography>
              </div>
            </Stack>
          </DashboardGroupBox>
        </DashboardInnerRightContainer>
      </DashboardContainer>
    </>
  );
};

export default UserDashbord;
