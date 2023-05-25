import React, { useState } from "react";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {
  LinkContainer,
  LinkHeader,
  LinkBody,
  IconBox,
  LinkHeaderBox,
  UserNavLink,
} from "./userNavStyles";

const LeftNavLinkDropDown = ({
  icon,
  linkName,
  nowActive,
  activateLink,
  linksArray,
}) => {
  let [expandedActive, setExpandedActive] = useState("");

  const handleActiveLink = (name) => {
    setExpandedActive(name);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    activateLink(event, panel);
    if (!nowActive) {
      handleActiveLink("");
    }
  };
  return (
    <>
      <LinkContainer expanded={nowActive} onChange={handleChange(linkName)}>
        <LinkHeader expandIcon={<ArrowDropDownIcon />}>
          <LinkHeaderBox>
            <IconBox active={nowActive}>{icon}</IconBox>
            <Typography
              variant={nowActive ? "userLinkTextBold" : "userLinkText"}
            >
              Health Data
            </Typography>
          </LinkHeaderBox>
        </LinkHeader>
        <LinkBody>
          {linksArray.map((item) => (
            <UserNavLink
              href={item.linkUrl}
              onClick={() => handleActiveLink(item.name)}
              key={item.name}
            >
              <Typography
                variant={
                  nowActive && expandedActive === item.name
                    ? "userDropDownLinkTextActive"
                    : "userDropDownLinkText"
                }
              >
                {item.name}
              </Typography>
            </UserNavLink>
          ))}
        </LinkBody>
      </LinkContainer>
    </>
  );
};

export default LeftNavLinkDropDown;
