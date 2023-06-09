import React from "react";
import { AiSupportBody, AisupportBodyContainer } from "./aiSupportStyles";
import EnquiryInput from "./EnquiryInput";
import ClientChartComp from "./ClientChartComp";
import AssistantChartComp from "./AssistantChartComp";
import { Typography } from "@mui/material";

const AiSupportComp = () => {
  return (
    <>
      <AisupportBodyContainer>
        <AiSupportBody>
          <Typography
            variant="caption"
            sx={{ margin: "1rem 0rem", textAlign: "center" }}
          >
            TODAY, WED - MAR 3, 2022
          </Typography>
          <ClientChartComp />
          <AssistantChartComp />
          <ClientChartComp />
          <AssistantChartComp />
        </AiSupportBody>
        <EnquiryInput />
      </AisupportBodyContainer>
    </>
  );
};

export default AiSupportComp;
