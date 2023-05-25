import React from "react";
import { UserNavLink, IconBox } from "./userNavStyles";
import { Typography } from "@mui/material";

const LeftNavLink = ({ icon, linkName, linkUrl, nowActive, activateLink }) => {
  // let [linkActive, setLinkActive] = useState(false);
  return (
    <>
      <UserNavLink
        href={`${linkUrl}`}
        onClick={(e) => activateLink(e, linkName)}
      >
        <IconBox active={nowActive}>{icon}</IconBox>

        <Typography variant={nowActive ? "userLinkTextBold" : "userLinkText"}>
          {linkName}
        </Typography>
      </UserNavLink>
    </>
  );
};

export default LeftNavLink;
