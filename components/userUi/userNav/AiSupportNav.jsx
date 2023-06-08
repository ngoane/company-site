import React from "react";
import {
  AiSupportLogo,
  AiSupportTopNavBar,
  AiSupportTopNavBarInnerBox,
  AiSupportTopNavLeftBox,
  AiSupportTopNavRightBox,
  NotificationIcon,
  TopNavNotification,
} from "./userNavStyles";
import { Avatar, Badge, IconButton, Typography } from "@mui/material";
import { More } from "iconsax-react";

const AiSupportNav = () => {
  return (
    <>
      <AiSupportTopNavBar elevation={0}>
        <AiSupportTopNavBarInnerBox>
          <AiSupportTopNavLeftBox direction={"row"} spacing={2}>
            <AiSupportLogo />
            <div>
              <Typography variant="titleBold">AI Health Support</Typography>
              <Typography variant="caption" color={"#2D9350"}>
                ONLINE
              </Typography>
            </div>
          </AiSupportTopNavLeftBox>
          <AiSupportTopNavRightBox direction={"row"} spacing={6}>
            <Badge
              variant="dot"
              color={"success"}
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Avatar sx={{ width: "3rem", height: "3rem" }} />
            </Badge>

            <TopNavNotification badgeContent={7} color="error">
              <NotificationIcon />
            </TopNavNotification>

            <IconButton>
              <More style={{ transform: " rotate(90deg)" }} />
            </IconButton>
          </AiSupportTopNavRightBox>
        </AiSupportTopNavBarInnerBox>
      </AiSupportTopNavBar>
    </>
  );
};

export default AiSupportNav;
