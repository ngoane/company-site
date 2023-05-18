import React from "react";
import {
  NotificationIcon,
  TopNavProfileAvatar,
  TopNavBar,
  TopNavBarInnerBox,
  TopNavNotification,
  TopNavNotificationandProfileBox,
  TopNavProfileBox,
  TopNavSearchBar,
  TopNavProfileName,
} from "./adminNavStyles";
import { AdminTextButton } from "@/styles/globalComponentsStyle";
import { Box, InputAdornment, Typography } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const TopNav = () => {
  return (
    <>
      <TopNavBar>
        <TopNavBarInnerBox>
          <AdminTextButton startIcon={<ArrowCircleLeftOutlinedIcon />}>
            Back
          </AdminTextButton>
          <TopNavSearchBar
            size="small"
            placeholder="SEARCH"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TopNavNotificationandProfileBox>
            <div>
              <TopNavNotification badgeContent={4} color="error">
                <NotificationIcon />
              </TopNavNotification>
            </div>

            <TopNavProfileBox>
              <TopNavProfileAvatar />
              <Box>
                <Typography variant="caption">welcome</Typography>
                <TopNavProfileName>user name</TopNavProfileName>
              </Box>
            </TopNavProfileBox>
          </TopNavNotificationandProfileBox>
        </TopNavBarInnerBox>
      </TopNavBar>
    </>
  );
};

export default TopNav;
