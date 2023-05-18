import React, { useState } from "react";
import { AdminIconBox, AdminNavLink } from "./adminNavStyles";
import { Typography } from "@mui/material";

const LeftNavLink = ({ Icon, LinkName, LinkUrl }) => {
  let [linkActive, setLinkActive] = useState(false);
  return (
    <>
      <AdminNavLink
        href={`${LinkUrl}`}
        onFocus={() => setLinkActive(true)}
        onBlur={() => setLinkActive(false)}
      >
        <AdminIconBox active={linkActive}>{Icon}</AdminIconBox>

        <Typography
          variant={linkActive ? "adminLinkTextBold" : "adminLinkText"}
        >
          {LinkName}
        </Typography>
      </AdminNavLink>
    </>
  );
};

export default LeftNavLink;
