import React from "react";
import NavComp from "../navigation/NavComp";
import FooterComp from "../footer/FooterComp";
import { MainWrapper } from "@/styles/globalComponentsStyle";

const Layout = ({ children }) => {
  return (
    <>
      <NavComp />
      <MainWrapper>{children}</MainWrapper>

      <FooterComp />
    </>
  );
};

export default Layout;
