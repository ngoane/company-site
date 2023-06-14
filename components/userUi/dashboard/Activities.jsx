import React from "react";
import {
  CommunitiesItemsBox,
  CommunityCard,
  DashboardActivitiesBox,
  DashboardCommunitiesBox,
  DashboardMeetUpBox,
  MeetUpItemsBox,
} from "./dashboardStyles";
import { Typography } from "@mui/material";
import CommunityCardComp from "./CommunityCardComp";
import MeetUpItemComp from "./MeetUpItemComp";

const Activities = () => {
  return (
    <>
      <DashboardActivitiesBox direction={"row"} spacing={4}>
        <DashboardCommunitiesBox>
          <Typography variant="headlineMainBold">
            Recommended Communities
          </Typography>
          <CommunitiesItemsBox direction={"row"} spacing={2}>
            <CommunityCardComp />
            <CommunityCardComp />
          </CommunitiesItemsBox>
        </DashboardCommunitiesBox>

        <DashboardMeetUpBox>
          <Typography variant="headlineMainBold">Upcoming Meet-ups</Typography>
          <MeetUpItemsBox spacing={2}>
            <MeetUpItemComp />
            <MeetUpItemComp />
            <MeetUpItemComp />
          </MeetUpItemsBox>
        </DashboardMeetUpBox>
      </DashboardActivitiesBox>
    </>
  );
};

export default Activities;
