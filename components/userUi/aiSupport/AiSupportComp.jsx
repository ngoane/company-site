import React from "react";
import { AiSupportBody, AisupportBodyContainer } from "./aiSupportStyles";
import EnquiryInput from "./EnquiryInput";

const AiSupportComp = () => {
  return (
    <>
      <AisupportBodyContainer>
        <AiSupportBody></AiSupportBody>
        <EnquiryInput />
      </AisupportBodyContainer>
    </>
  );
};

export default AiSupportComp;
