import React, { useState } from "react";
import { UserIconBox, UserNavLink } from "./userNavStyles";
import { Typography } from "@mui/material";

const LeftNavLink = ({ Icon, LinkName, LinkUrl }) => {
  let [linkActive, setLinkActive] = useState(false);
  return (
    <>
      <UserNavLink
        href={`${LinkUrl}`}
        onFocus={() => setLinkActive(true)}
        onBlur={() => setLinkActive(false)}
      >
        <UserIconBox active={linkActive}>{Icon}</UserIconBox>

        <Typography variant={linkActive ? "userLinkTextBold" : "userLinkText"}>
          {LinkName}
        </Typography>
      </UserNavLink>
    </>
  );
};

export default LeftNavLink;
