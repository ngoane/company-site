import React from "react";
import { UserNavLink, IconBox } from "./userNavStyles";
import { Typography } from "@mui/material";

/*
name: LeftNavLink

Description: this component is and individual link component located on the leftNav component that links to a new user page.

instructions: it accepts {icon, linkName, linkUrl, nowActive, activateLink } props which are neccessary to return and individual link

returns: a single indidvidual link to a new user page


*/

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
