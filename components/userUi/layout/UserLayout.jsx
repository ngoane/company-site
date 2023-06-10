import React from "react";
import {
  UserBody,
  UserLayoutContainer,
  UserLayoutRightBox,
  TopNavBox,
} from "./userLayoutStyle";
import LeftNav from "../userNav/LeftNav";
import TopNav from "../userNav/TopNav";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AiSupportNav from "../userNav/AiSupportNav";

const UserLayout = ({ children }) => {
  const [aiLayout, setAiLayout] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let path = router.pathname;
    let aiSupport = path.match("ai_support");
    if (aiSupport) {
      setAiLayout(true);
    } else {
      setAiLayout(false);
    }
  });
  return (
    <>
      {console.log("ai layout:", aiLayout)}
      <UserLayoutContainer>
        <LeftNav />

        <UserLayoutRightBox>
          <TopNavBox ai={aiLayout ? "true" : ""}>
            {!aiLayout ? <TopNav /> : <AiSupportNav />}
          </TopNavBox>
          <UserBody ai={aiLayout ? "true" : ""}>{children}</UserBody>
        </UserLayoutRightBox>
      </UserLayoutContainer>
    </>
  );
};

export default UserLayout;
