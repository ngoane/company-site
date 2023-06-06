import React from "react";
import {
  DashboardGroupBox,
  VitalsIconBox,
  VitalsSectionBox,
} from "./dashboardStyles";

import { Bubble } from "iconsax-react";
import PressureIcon from "../../../public/img/userDashboardImg/favChart.svg";
import Pill from "../../../public/img/userDashboardImg/pill.svg";
import HealthStat from "../../../public/img/userDashboardImg/Linear-health.svg";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import Image from "next/image";
import { Typography } from "@mui/material";

const DashboardVitals = () => {
  return (
    <>
      <VitalsSectionBox direction={"row"} spacing={1}>
        <DashboardGroupBox
          elevation={0}
          bgColor={"#2EB58D"}
          compWidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Bubble />
            <Typography variant="bodyBold">Blood Glucose</Typography>
          </VitalsIconBox>
        </DashboardGroupBox>

        <DashboardGroupBox
          elevation={0}
          bgColor={"#F56CAE"}
          compWidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Image
              src="img/userDashboardImg/pressure.svg"
              width={20}
              height={20}
            />
            <Typography variant="bodyBold">Blood Pressure</Typography>
          </VitalsIconBox>
        </DashboardGroupBox>

        <DashboardGroupBox
          elevation={0}
          bgColor={"#AF67F5"}
          compWidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Image src="img/userDashboardImg/pill.svg" width={20} height={20} />
            <Typography variant="bodyBold">Medication</Typography>
          </VitalsIconBox>
        </DashboardGroupBox>

        <DashboardGroupBox
          elevation={0}
          bgColor={"#FA7564"}
          compWidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Image
              src="img/userDashboardImg/favChart.svg"
              width={20}
              height={20}
            />
            <Typography variant="bodyBold">Stress</Typography>
          </VitalsIconBox>
        </DashboardGroupBox>
      </VitalsSectionBox>
    </>
  );
};

export default DashboardVitals;
