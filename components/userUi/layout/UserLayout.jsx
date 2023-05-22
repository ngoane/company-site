import React from "react";
import {
  UserBody,
  UserLayoutContainer,
  UserLayoutRightBox,
  TopNavBox,
} from "./userLayoutStyle";
import LeftNav from "../userNav/LeftNav";
import TopNav from "../userNav/TopNav";

const UserLayout = ({ children }) => {
  return (
    <>
      <UserLayoutContainer>
        <LeftNav />

        <UserLayoutRightBox>
          <TopNavBox>
            <TopNav />
          </TopNavBox>
          <UserBody>{children}</UserBody>
        </UserLayoutRightBox>
      </UserLayoutContainer>
    </>
  );
};

export default UserLayout;
