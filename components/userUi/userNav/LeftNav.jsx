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
  { name: "Symptoms Tracker", linkUrl: "/user/health_data/symptom_tracker" },
  { name: "Lab Report", linkUrl: "/user" },
  { name: "Health History", linkUrl: "/user" },
];

/*
name: LeftNav

Description: this is the user section left nav bar where all the links to other pages can br found including the settings

instructions: it currently does not accept any prop but returns all the link to other pages ui and also manage the acctive link state

returns: All the individual and drop down link to other pages ui


*/

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
