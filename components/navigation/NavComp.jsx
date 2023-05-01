import React from "react";
import { Nav, InnerNav, NavLogo, NavLinkContainer } from "./navCompStyle";

import {
  NavLinkWhiteText,
  NavLinkWhiteButton,
} from "@/styles/globalComponentsStyle";

const NavComp = () => {
  return (
    <>
      <Nav>
        <InnerNav>
          <NavLogo src={"/logos/navLogo.png"} />
          <NavLinkContainer>
            <NavLinkWhiteText href="/">Home</NavLinkWhiteText>
            <NavLinkWhiteText href="">About</NavLinkWhiteText>
            <NavLinkWhiteText href="/blog">Blog</NavLinkWhiteText>
            <NavLinkWhiteText href="Contact">Contact</NavLinkWhiteText>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkWhiteText href="">Login</NavLinkWhiteText>
            <NavLinkWhiteButton href="">Sign up</NavLinkWhiteButton>
          </NavLinkContainer>
        </InnerNav>
      </Nav>
    </>
  );
};

export default NavComp;
