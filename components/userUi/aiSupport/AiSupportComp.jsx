import React, { useState, useEffect, useRef } from "react";
import { AiSupportBody, AisupportBodyContainer } from "./aiSupportStyles";
import EnquiryInput from "./EnquiryInput";
import ClientChartComp from "./ClientChartComp";
import AssistantChartComp from "./AssistantChartComp";
import { Typography } from "@mui/material";
// import axios from "axios";

const AiSupportComp = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a chatbot that is helpful and replies concisely",
    },
  ]);

  // An array of the messages that make up the chat
  const [newMessageText, setNewMessageText] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);

  // `onChange` event handler to update `newMessageText` as the user types
  const onChangeMessage = (event) => {
    setNewMessageText(event.target.value);
  };

  // `onClick` event handler to create a new chat
  const onClickSend = () => {
    setMessages([...messages, { role: "user", content: newMessageText }]);
    setLoadingStatus(true);
    setNewMessageText("");
    console.log("full message", messages);
  };

  // `onKeyDown` event handler to send a message when the return key is hit
  // The user can start a new line by pressing shift-enter
  const onKeyDown = (event) => {
    if (event.keyCode == 13 && event.shiftKey == false) {
      onClickSend();
    }
  };

  useEffect(() => {
    // Function that calls the `/api/chat` endpoint and updates `messages`
    const fetchReply = async () => {
      try {
        // Try to fetch a `reply` from the endpoint and update `messages`
        console.log("fetching response");
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages }),
        });

        const responseBody = await response.json();
        console.log("on response :", responseBody);
        // const reply =
        //   response.status === 200
        //     ? responseBody.reply
        //     : responseBody.error.reply;

        // setMessages([...messages, reply]);
      } catch {
        // Catch and handle any unexpected errors
        const reply = {
          role: "assistant",
          content: "An error has occured.",
        };

        console.log("on response error:", reply);
        // setMessages([...messages, reply]);
      }
      // Set `setLoadingStatus` to false
      setLoadingStatus(false);
    };

    // `fetchReply` executes only if a new message has been submitted
    // `setLoadingStatus(false)` triggers the hook again
    // No action occurs the second time because of the condition
    if (loadingStatus === true) {
      fetchReply();
    }
  }, [loadingStatus]);

  return (
    <>
      <AisupportBodyContainer>
        <AiSupportBody>
          <Typography
            variant="caption"
            sx={{ margin: "1rem 0rem", textAlign: "center" }}
          >
            TODAY, WED - MAR 3, 2022
          </Typography>
          <ClientChartComp />
          <AssistantChartComp />
          <ClientChartComp />
          <AssistantChartComp />
        </AiSupportBody>
        <EnquiryInput
          onQuery={onChangeMessage}
          onEnterKey={onKeyDown}
          currentMessage={newMessageText}
          sendMessage={onClickSend}
        />
      </AisupportBodyContainer>
    </>
  );
};

export default AiSupportComp;
