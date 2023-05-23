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
            <NavLinkWhiteText href="/ngoane">Home</NavLinkWhiteText>
            <NavLinkWhiteText href="">About</NavLinkWhiteText>
            <NavLinkWhiteText href="/ngoane/blog">Blog</NavLinkWhiteText>
            <NavLinkWhiteText href="/ngoane/contact">Contact</NavLinkWhiteText>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkWhiteText href="ngoane/auth/login">Login</NavLinkWhiteText>
            <NavLinkWhiteButton href="ngoane/auth/register">
              Sign up
            </NavLinkWhiteButton>
          </NavLinkContainer>
        </InnerNav>
      </Nav>
    </>
  );
};

export default NavComp;
