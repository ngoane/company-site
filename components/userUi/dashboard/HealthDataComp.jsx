import React from "react";
import {
  DashboardGroupBox,
  HealthDataContainer,
  HealthDataImg,
  HealthDataItem,
} from "./dashboardStyles";
import { Typography } from "@mui/material";

const HealthDataComp = () => {
  return (
    <>
      <HealthDataContainer>
        <Typography variant="titleBold">Health Data</Typography>
        <DashboardGroupBox sx={{ marginTop: "1rem" }}>
          <HealthDataItem direction={"row"}>
            <HealthDataImg width={24} height={24} src={""} />
            <Typography variant="body">G6PDD Status</Typography>
            <Typography variant="titleBold" color={"#F77A4D"}>
              +
            </Typography>
          </HealthDataItem>
        </DashboardGroupBox>

        <DashboardGroupBox sx={{ marginTop: "1rem" }}>
          <HealthDataItem direction={"row"}>
            <HealthDataImg width={24} height={24} src={""} />
            <Typography variant="body">Sickling Status</Typography>
            <Typography variant="bodyBold" color={"primary"}>
              AS
            </Typography>
          </HealthDataItem>
        </DashboardGroupBox>

        <DashboardGroupBox sx={{ marginTop: "1rem" }}>
          <HealthDataItem direction={"row"}>
            <HealthDataImg width={24} height={24} src={""} />
            <Typography variant="body">G6PDD Status</Typography>
            <Typography variant="bodyBold" color={"#E31276"}>
              A+
            </Typography>
          </HealthDataItem>
        </DashboardGroupBox>
      </HealthDataContainer>
    </>
  );
};

export default HealthDataComp;
