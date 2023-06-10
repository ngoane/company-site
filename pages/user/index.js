import React from "react";
import { Typography } from "@mui/material";
import UserDashbord from "@/components/userUi/dashboard/UserDashbord";

const index = () => {
  return (
    <>
      <Typography variant="headlineMainBold">My Dasboard</Typography>
      <UserDashbord />
    </>
  );
};

export default index;
