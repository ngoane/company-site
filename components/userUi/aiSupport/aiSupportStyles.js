import styled from "@emotion/styled";
import { IconButton, InputBase, Stack } from "@mui/material";

export const AisupportBodyContainer = styled.main`
  position: relative !important;
  width: 100%;
  height: 85.5vh;
  background-color: ${({ theme }) => theme.palette.whiteBg};
`;

export const AiSupportBody = styled.section`
  width: 100%;
  height: 90%;
  /* border: 1px solid red; */
  overflow-y: scroll;
  /* width */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(145, 56, 232, 0.1);
    border-radius: 1rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #9138e8;
    border-radius: 1rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

//enquiry input comp styles

export const AiSupportInputContainer = styled(Stack)`
  position: fixed;
  bottom: 0rem;
  right: 2rem;
  width: 80%;
  padding: 0.5rem 1rem;
  background: #efe9f5;
  border-radius: 7px;
  align-items: center;
`;

export const AiSupportInput = styled(InputBase)`
  width: 90%;
  /* border: 1px solid red; */
`;

export const AiSupportInputSubmit = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin-inline: 1rem;
  color: white;
  &:hover {
    background-color: #9138e8;
  }
`;

//chart box styles for both client and the ai assistant.

export const ClientChartBox = styled.div`
  position: relative;
  width: 38.563rem;
  margin-left: 2.5rem;
  margin-top: 2rem;
`;

export const ClientChart = styled.div`
  width: 100%;
  border-radius: 2rem 0rem 0rem 0rem;
  background-color: rgba(227, 18, 118, 0.1);
  padding: 2rem 1rem;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0.005em;
  color: #3a3a3a;
`;

export const ClientAvatarBox = styled(Stack)`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
`;

export const AssistantChartBox = styled.div`
  position: relative;
  width: 38.563rem;
  margin-left: 23.375rem;
  margin-top: 5rem;
`;

export const AssistantChart = styled.div`
  width: 100%;
  border-radius: 0rem 2rem 0rem 0rem;
  background-color: rgba(145, 56, 232, 0.1);
  padding: 2rem 1rem;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0.005em;
  color: #3a3a3a;
`;

export const AssistantAvatarBox = styled(Stack)`
  position: absolute;
  bottom: -0.5rem;
  left: -0.5rem;
`;
