import React from "react";
import {
  AssistantAvatarBox,
  AssistantChartBox,
  AssistantChart,
} from "./aiSupportStyles";
import { Avatar, Typography } from "@mui/material";

const AssistantChartComp = () => {
  return (
    <>
      <AssistantChartBox>
        <Typography variant="caption" sx={{ textAlign: "start" }}>
          AI, 9:30pm
        </Typography>
        <AssistantChart>
          I was recently diagnosed with diabetes. Can you please tell me how to
          treat it? Suggest ways I can effectively control diabetes.
        </AssistantChart>
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
