import React from "react";
import {
  AppointmentAvatar,
  AppointmentContainer,
  AppointmentDataItem,
  DashboardGroupBox,
} from "./dashboardStyles";
import { Avatar, Typography } from "@mui/material";

const AppointmentComp = () => {
  return (
    <>
      <AppointmentContainer>
        <Typography variant="titleBold">Appointment</Typography>
        <DashboardGroupBox sx={{ marginTop: "1rem" }}>
          <AppointmentDataItem direction={"row"} spacing={2}>
            <AppointmentAvatar />
            <div>
              <Typography variant="body">Hospital Visit</Typography>
              <Typography variant="body">Review</Typography>
              <Typography variant="caption">24 April, 2023</Typography>
            </div>
          </AppointmentDataItem>
        </DashboardGroupBox>

        <DashboardGroupBox sx={{ marginTop: "1rem" }}>
          <AppointmentDataItem direction={"row"} spacing={2}>
            <AppointmentAvatar />
            <div>
              <Typography variant="body">Hospital Visit</Typography>
              <Typography variant="body">Review</Typography>
              <Typography variant="caption">24 April, 2023</Typography>
            </div>
          </AppointmentDataItem>
        </DashboardGroupBox>
      </AppointmentContainer>
    </>
  );
};

export default AppointmentComp;
