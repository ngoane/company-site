import React from "react";
import {
  UserLogo,
  LeftNavBox,
  LeftNavInnerBox,
  LeftNavLogoContainer,
} from "./userNavStyles";
import LeftNavLink from "./LeftNavLink";
import { Divider } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const LeftNav = () => {
  return (
    <>
      <LeftNavBox elevation={8} square="true">
        <LeftNavLogoContainer>
          <UserLogo src="/logos/adminLogo.svg" />
        </LeftNavLogoContainer>

        <Divider />

        <LeftNavInnerBox>
          <LeftNavLink
            Icon={<DashboardRoundedIcon />}
            LinkUrl={"/user"}
            LinkName={"Dashboard"}
          />
        </LeftNavInnerBox>
      </LeftNavBox>
    </>
  );
};

export default LeftNav;
