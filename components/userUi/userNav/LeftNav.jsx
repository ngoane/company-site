import React, { useState } from "react";
import {
  UserLogo,
  LeftNavBox,
  LeftNavInnerBox,
  LeftNavLogoContainer,
  LogOutSettingsBox,
} from "./userNavStyles";
import LeftNavLink from "./LeftNavLink";
import { Divider } from "@mui/material";
import LeftNavLinkDropDown from "./LeftNavLinkDropDown";
import { Element4 } from "iconsax-react";
import { Health } from "iconsax-react";
import { DeviceMessage } from "iconsax-react";
import { Briefcase } from "iconsax-react";
import { ExternalDrive } from "iconsax-react";
import { Calendar } from "iconsax-react";
import { TagUser } from "iconsax-react";
import { Setting2 } from "iconsax-react";
import { ImportCurve } from "iconsax-react";
import { Book1 } from "iconsax-react";

const healthDataLinksArray = [
  { name: "Symptoms", linkUrl: "/user/health_data/symptom_tracker" },
  { name: "Lab Report", linkUrl: "/user" },
  { name: "Health History", linkUrl: "/user/health_data/health_history" },
];

const socialSupportDataLinksArray = [
  { name: "Chat", linkUrl: "/user" },
  { name: "Communities", linkUrl: "/user" },
  { name: "Health Coach", linkUrl: "/user" },
  { name: "Common Questions", linkUrl: "/user" },
];

const learnDataLinksArray = [
  { name: "Articles", linkUrl: "/user" },
  { name: "Health Tips", linkUrl: "/user" },
  { name: "Tools", linkUrl: "/user" },
  { name: "Quizzes", linkUrl: "/user" },
  { name: "Videos", linkUrl: "/user" },
  { name: "Webinars", linkUrl: "/user" },
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
            icon={<Element4 size={20} />}
            linkUrl={"/user"}
            linkName={"Dashboard"}
            nowActive={activeLink === "Dashboard"}
            activateLink={makeActive}
          />

          <LeftNavLinkDropDown
            icon={<Book1 size={20} />}
            linkName={"Health Data"}
            nowActive={activeLink === "Health Data"}
            activateLink={makeActive}
            linksArray={healthDataLinksArray}
          />

          <LeftNavLink
            icon={<Briefcase size={20} />}
            linkUrl={"/user"}
            linkName={"Medications"}
            nowActive={activeLink === "Medications"}
            activateLink={makeActive}
          />

          <LeftNavLink
            icon={<ExternalDrive size={20} />}
            linkUrl={"/user"}
            linkName={"Vital Signs"}
            nowActive={activeLink === "Vital Signs"}
            activateLink={makeActive}
          />

          <LeftNavLink
            icon={<Calendar size={20} />}
            linkUrl={"/user"}
            linkName={"Appointment"}
            nowActive={activeLink === "Appointment"}
            activateLink={makeActive}
          />

          <LeftNavLink
            icon={<DeviceMessage size={20} />}
            linkUrl={"/user/ai_support"}
            linkName={"AI Health Support"}
            nowActive={activeLink === "AI Health Support"}
            activateLink={makeActive}
          />

          <LeftNavLinkDropDown
            icon={<TagUser size={20} />}
            linkName={"Social Support"}
            nowActive={activeLink === "Social Support"}
            activateLink={makeActive}
            linksArray={socialSupportDataLinksArray}
          />

          <LeftNavLinkDropDown
            icon={<Health size={20} />}
            linkName={"Learn"}
            nowActive={activeLink === "Learn"}
            activateLink={makeActive}
            linksArray={learnDataLinksArray}
          />

          <LogOutSettingsBox>
            <LeftNavLink
              icon={<Setting2 size={20} />}
              linkUrl={"/user"}
              linkName={"Settings"}
              nowActive={activeLink === "Settings"}
              activateLink={makeActive}
            />

            <LeftNavLink
              icon={
                <ImportCurve size={20} style={{ transform: "rotate(90deg)" }} />
              }
              linkUrl={"/user/"}
              linkName={"Log Out"}
              nowActive={activeLink === "Log Out"}
              activateLink={makeActive}
            />
          </LogOutSettingsBox>
        </LeftNavInnerBox>
      </LeftNavBox>
    </>
  );
};

export default LeftNav;
