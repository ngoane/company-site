import React from "react";
import {
  AssistantAvatarBox,
  AssistantChartBox,
  AssistantChart,
} from "./aiSupportStyles";
import { Avatar, Typography } from "@mui/material";

const AssistantChartComp = ({ response }) => {
  return (
    <>
      <AssistantChartBox>
        <Typography variant="caption" sx={{ textAlign: "start" }}>
          AI, {response.time}
        </Typography>
        <AssistantChart>{response.content}</AssistantChart>
        <AssistantAvatarBox>
          <Avatar
            sx={{
              backgroundColor: "#9138E8",
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              fontSize: "0.8rem",
            }}
          >
            AI
          </Avatar>
        </AssistantAvatarBox>
      </AssistantChartBox>
    </>
  );
};

export default AssistantChartComp;
