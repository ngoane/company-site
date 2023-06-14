import React from "react";
import {
  AiSupportInput,
  AiSupportInputContainer,
  AiSupportInputSubmit,
} from "./aiSupportStyles";
import { Divider, IconButton } from "@mui/material";
import { Microphone2 } from "iconsax-react";
import { Send2 } from "iconsax-react";
import Image from "next/image";

const EnquiryInput = ({ onQuery, onEnterKey, currentMessage, sendMessage }) => {
  return (
    <>
      <AiSupportInputContainer direction={"row"}>
        <IconButton>
          <Image src={"/img/smilyface.png"} width={24} height={24} />
        </IconButton>

        <AiSupportInput
          placeholder="Ask me Anything"
          value={currentMessage}
          onChange={onQuery}
          onKeyDown={onEnterKey}
        />

        <IconButton>
          <Microphone2 />
        </IconButton>

        <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />

        <AiSupportInputSubmit onClick={sendMessage}>
          <Send2 />
        </AiSupportInputSubmit>
      </AiSupportInputContainer>
    </>
  );
};

export default EnquiryInput;
