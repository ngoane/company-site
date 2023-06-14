import React from "react";
import {
  ClientAvatarBox,
  ClientChartBox,
  ClientChart,
} from "./aiSupportStyles";
import { Avatar, Typography } from "@mui/material";

const ClientChartComp = ({ query }) => {
  return (
    <>
      <ClientChartBox>
        <Typography variant="caption" sx={{ textAlign: "end" }}>
          Me, {query.time}
        </Typography>
        <ClientChart>{query.content}</ClientChart>
        <ClientAvatarBox direction={"row"}>
          <Avatar sx={{ width: "1.5rem", height: "1.5rem" }} />
        </ClientAvatarBox>
      </ClientChartBox>
    </>
  );
};

export default ClientChartComp;
