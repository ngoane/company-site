import React, { useState, useEffect, useRef } from "react";
import { AiSupportBody, AisupportBodyContainer } from "./aiSupportStyles";
import EnquiryInput from "./EnquiryInput";
import ClientChartComp from "./ClientChartComp";
import AssistantChartComp from "./AssistantChartComp";
import { Typography } from "@mui/material";
// import axios from "axios";
import dayjs from "dayjs";

const AiSupportComp = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are a personal health assistant AI with expertise in chronic diseases. As an AI you strictly respond to only health questions and refuse to answer unrelated questions. As an AI, your response should be as brief and concise as possible.",
    },
  ]);

  // An array of the messages that make up the chat
  const [conversation, setConversation] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);

  const aiSupportBodyRef = useRef();

  // `onChange` event handler to update `newMessageText` as the user types
  const onChangeMessage = (event) => {
    setNewMessageText(event.target.value);
  };

  // `onClick` event handler to create a new chat
  const onClickSend = () => {
    let time = dayjs(dayjs().$d).format("hh:mm a");
    setMessages([...messages, { role: "user", content: newMessageText }]);
    setConversation([
      ...conversation,
      { role: "user", content: newMessageText, time },
    ]);
    setLoadingStatus(true);
    setNewMessageText("");
    // console.log("conversations list", conversation);
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

        const reply =
          response.status === 200
            ? responseBody.reply
            : responseBody.error.reply;
        setMessages([...messages, reply]);
        let convoReply = {
          ...reply,
          time: dayjs(dayjs().$d).format("hh:mm a"),
        };
        setConversation([...conversation, convoReply]);
        // console.log("on response reply :", reply);
      } catch {
        // Catch and handle any unexpected errors
        const reply = {
          role: "assistant",
          content: "An error has occured.",
        };

        // console.log("on response error:", reply);
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

  useEffect(() => {
    aiSupportBodyRef.current.scrollTop = aiSupportBodyRef.current.scrollHeight;
    // console.log(aiSupportBodyRef.current);
  }, [conversation]);

  return (
    <>
      {/* {console.log("conversation :", conversation)} */}
      <AisupportBodyContainer>
        <AiSupportBody ref={aiSupportBodyRef}>
          {conversation.map((item, index) => {
            return item.role === "user" ? (
              <ClientChartComp query={item} key={index} />
            ) : (
              <AssistantChartComp response={item} key={index} />
            );
          })}
          {loadingStatus && (
            <Typography
              variant="caption"
              sx={{ margin: "1rem 0rem", textAlign: "center" }}
            >
              AI,GENERATING RESPONSE...
            </Typography>
          )}
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
