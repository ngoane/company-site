import React from "react";
import {
  ChartHeaderBox,
  DashboardChartBox,
  DashboardGroupBox,
  SelectChartRange,
} from "./dashboardStyles";
import { MenuItem, Typography } from "@mui/material";

const DashboardChart = () => {
  return (
    <>
      <DashboardChartBox direction={"row"} spacing={2}>
        <DashboardGroupBox compWidth={"50%"} elevation={0}>
          <ChartHeaderBox direction={"row"}>
            <Typography variant="titleBold">Activity</Typography>
            <SelectChartRange select size="small">
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
            </SelectChartRange>
          </ChartHeaderBox>
        </DashboardGroupBox>

        <DashboardGroupBox compWidth={"50%"} elevation={0}>
          <ChartHeaderBox direction={"row"}>
            <Typography variant="titleBold">Progress</Typography>
            <SelectChartRange select size="small">
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
            </SelectChartRange>
          </ChartHeaderBox>
        </DashboardGroupBox>
      </DashboardChartBox>
    </>
  );
};

export default DashboardChart;
