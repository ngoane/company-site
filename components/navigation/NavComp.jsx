import React from "react";
import { Nav, NavLogo } from "./navCompStyle";
import Image from "next/image";
const NavComp = () => {
  return (
    <>
      <Nav>
        <NavLogo src={"/navLogo.png"} />
      </Nav>
    </>
  );
};

export default NavComp;
