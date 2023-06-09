import styled from "@emotion/styled";
import {
  Paper,
  TextField,
  Stack,
  Badge,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

//left nav box style components
export const LeftNavBox = styled(Paper)`
  width: 13%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const LeftNavLogoContainer = styled.div`
  padding: 2rem 1rem;
  display: grid;
  place-content: center;
`;

export const UserLogo = styled.img`
  width: 90%;
`;

export const LeftNavInnerBox = styled.nav`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  padding-bottom: 2rem;
  gap: 0.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
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

export const UserNavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.7rem;
  color: #3a3a3a;
  width: 100%;
`;

export const LogOutSettingsBox = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const UserIconBox = styled.i`
  color: ${({ theme, active }) =>
    active == true ? theme.palette.primary.main : "#3A3A3A"};
`;

//left nav link drop down components styles
export const LinkContainer = styled(Accordion)`
  &.MuiAccordion-root {
    background-color: transparent;
    border: none !important;
    outline: none !important;
    box-shadow: 0 0 0 0 transparent;
    width: 100%;
    padding: 0rem;
  }
`;

export const LinkHeader = styled(AccordionSummary)`
  padding: 0rem 1rem 0rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const LinkBody = styled(AccordionDetails)`
  margin-top: -1rem;
  padding-left: 0.5;
`;

//top nav styled components
export const TopNavBar = styled(Paper)`
  background-color: ${({ theme }) => theme.palette.whiteBg};
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
`;

export const TopNavBarInnerBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem 0rem 1.5rem;
`;

export const TopNavSearchBar = styled(TextField)`
  width: 50%;
`;

export const TopNavNotificationandProfileBox = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const TopNavNotification = styled(Badge)``;

export const NotificationIcon = styled(NotificationsRoundedIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  transform: rotate(15deg);
`;

export const TopNavProfileBox = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TopNavProfileAvatar = styled(Avatar)`
  width: 38px;
  height: 38px;
`;

export const TopNavProfileName = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #9138e8;
`;

export const IconBox = styled.i`
  padding: 0.1rem 0.2rem;
  border-radius: 0.2rem;
  color: ${({ active }) => (active ? "white" : "")};
  background-color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : "transparent"};
`;

//Ai support top nav components

export const AiSupportTopNavBar = styled(Paper)`
  background-color: ${({ theme }) => theme.palette.whiteBg};
  padding: 2rem 0rem 0rem 0rem;
  width: 100%;
  height: 6rem;
  border-radius: 0;
  border-bottom: 1px solid lightgray;
`;

export const AiSupportTopNavBarInnerBox = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem 0rem 1.5rem;
`;

export const AiSupportTopNavLeftBox = styled(Stack)`
  align-items: center;
  justify-content: flex-start;
`;

export const AiSupportTopNavRightBox = styled(Stack)`
  align-items: center;
  justify-content: flex-start;
`;

export const AiSupportLogo = styled(Avatar)`
  width: 2.5rem;
  height: 2.5rem;
`;
