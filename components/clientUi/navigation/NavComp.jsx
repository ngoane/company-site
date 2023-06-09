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
            <NavLinkWhiteText href="/about">About</NavLinkWhiteText>
            <NavLinkWhiteText href="/blog">Blog</NavLinkWhiteText>
            <NavLinkWhiteText href="/contact">Contact</NavLinkWhiteText>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkWhiteText href="/auth/login">Login</NavLinkWhiteText>
            <NavLinkWhiteButton href="/auth/register">
              Sign up
            </NavLinkWhiteButton>
          </NavLinkContainer>
        </InnerNav>
      </Nav>
    </>
  );
};

export default NavComp;
