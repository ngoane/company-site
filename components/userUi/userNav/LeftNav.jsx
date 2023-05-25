import React, { useState } from "react";
import {
  UserLogo,
  LeftNavBox,
  LeftNavInnerBox,
  LeftNavLogoContainer,
} from "./userNavStyles";
import LeftNavLink from "./LeftNavLink";
import { Divider } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LeftNavLinkDropDown from "./LeftNavLinkDropDown";

const healthDataLinksArray = [
  { name: "Symptoms", linkUrl: "/user" },
  { name: "Lab Report", linkUrl: "/user" },
  { name: "Health History", linkUrl: "/user" },
];

const LeftNav = () => {
  let [activeLink, setActiveLink] = useState("");

  const makeActive = (e, name) => {
    setActiveLink(name);
  };
  return (
    <>
      <LeftNavBox elevation={8} square={true}>
        <LeftNavLogoContainer>
          <UserLogo src="/logos/adminLogo.svg" />
        </LeftNavLogoContainer>

        <Divider />

        <LeftNavInnerBox>
          <LeftNavLink
            icon={<DashboardRoundedIcon />}
            linkUrl={"/user"}
            linkName={"Dashboard"}
            nowActive={activeLink === "Dashboard"}
            activateLink={makeActive}
          />

          <LeftNavLinkDropDown
            icon={<DashboardRoundedIcon />}
            linkName={"Health Data"}
            nowActive={activeLink === "Health Data"}
            activateLink={makeActive}
            linksArray={healthDataLinksArray}
          />
        </LeftNavInnerBox>
      </LeftNavBox>
    </>
  );
};

export default LeftNav;
