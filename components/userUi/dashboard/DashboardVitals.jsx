import React from "react";
import {
  DashboardGroupBox,
  TempImage,
  TempImageBox,
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
          bgcolor={"#2EB58D"}
          compwidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Bubble />
            <Typography variant="bodyBold">Blood Glucose</Typography>
          </VitalsIconBox>
          <TempImageBox>
            <TempImage src="/img/userDashboardImg/bloodGroupChart.png" />
          </TempImageBox>
        </DashboardGroupBox>

        <DashboardGroupBox
          elevation={0}
          bgcolor={"#F56CAE"}
          compwidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Image
              src="img/userDashboardImg/pressure.svg"
              width={20}
              height={20}
            />
            <Typography variant="bodyBold">Blood Pressure</Typography>
          </VitalsIconBox>
          <TempImageBox>
            <TempImage src="/img/userDashboardImg/bloodPressureIcon.png" />
          </TempImageBox>
        </DashboardGroupBox>

        <DashboardGroupBox
          elevation={0}
          bgcolor={"#AF67F5"}
          compwidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Image src="img/userDashboardImg/pill.svg" width={20} height={20} />
            <Typography variant="bodyBold">Medication</Typography>
          </VitalsIconBox>
          <TempImageBox>
            <TempImage src="/img/userDashboardImg/medicationChart.png" />
          </TempImageBox>
        </DashboardGroupBox>

        <DashboardGroupBox
          elevation={0}
          bgcolor={"#FA7564"}
          compwidth={"33.3%"}
        >
          <VitalsIconBox direction={"row"} spacing={2}>
            <Image
              src="img/userDashboardImg/favChart.svg"
              width={20}
              height={20}
            />
            <Typography variant="bodyBold">Stress</Typography>
          </VitalsIconBox>
          <TempImageBox>
            <TempImage src="/img/userDashboardImg/stressChart.png" />
          </TempImageBox>
        </DashboardGroupBox>
      </VitalsSectionBox>
    </>
  );
};

export default DashboardVitals;
