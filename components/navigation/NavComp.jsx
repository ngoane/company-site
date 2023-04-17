import React from "react";
import {
  Nav,
  InnerNav,
  NavLogo,
  NavLinkContainer,
  NavLink,
  NavLinkWhite,
} from "./navCompStyle";

const NavComp = () => {
  return (
    <>
      <Nav>
        <InnerNav>
          <NavLogo src={"/navLogo.png"} />
          <NavLinkContainer>
            <NavLink href="">Home</NavLink>
            <NavLink href="">Home</NavLink>
            <NavLink href="">Home</NavLink>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLink href="">Login</NavLink>
            <NavLinkWhite href="">Sign up</NavLinkWhite>
          </NavLinkContainer>
        </InnerNav>
      </Nav>
    </>
  );
};

export default NavComp;
