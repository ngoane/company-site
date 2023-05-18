import React from "react";
import {
  AdminBody,
  AdminLayoutContainer,
  AdminLayoutRightBox,
  TopNavBox,
} from "./adminLayoutStyle";
import LeftNav from "../adminNav/LeftNav";
import TopNav from "../adminNav/TopNav";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminLayoutContainer>
        <LeftNav />

        <AdminLayoutRightBox>
          <TopNavBox>
            <TopNav />
          </TopNavBox>
          <AdminBody>{children}</AdminBody>
        </AdminLayoutRightBox>
      </AdminLayoutContainer>
    </>
  );
};

export default AdminLayout;
