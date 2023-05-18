import React from "react";
import {
  AdminLogo,
  LeftNavBox,
  LeftNavInnerBox,
  LeftNavLogoContainer,
} from "./adminNavStyles";
import LeftNavLink from "./LeftNavLink";
import { Divider } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const LeftNav = () => {
  return (
    <>
      <LeftNavBox elevation={8} square="true">
        <LeftNavLogoContainer>
          <AdminLogo src="/logos/adminLogo.svg" />
        </LeftNavLogoContainer>

        <Divider />

        <LeftNavInnerBox>
          <LeftNavLink
            Icon={<DashboardRoundedIcon />}
            LinkUrl={"/admin"}
            LinkName={"Dashboard"}
          />
        </LeftNavInnerBox>
      </LeftNavBox>
    </>
  );
};

export default LeftNav;
