import React from "react";
import {
  ClientAvatarBox,
  ClientChartBox,
  ClientChart,
} from "./aiSupportStyles";
import { Avatar, Typography } from "@mui/material";

const ClientChartComp = () => {
  return (
    <>
      <ClientChartBox>
        <Typography variant="caption" sx={{ textAlign: "end" }}>
          Me, 9:30pm
        </Typography>
        <ClientChart>
          I was recently diagnosed with diabetes. Can you please tell me how to
          treat it? Suggest ways I can effectively control diabetes.
        </ClientChart>
        <ClientAvatarBox direction={"row"}>
          <Avatar sx={{ width: "1.5rem", height: "1.5rem" }} />
        </ClientAvatarBox>
      </ClientChartBox>
    </>
  );
};

export default ClientChartComp;
