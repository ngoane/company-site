import styled from "@emotion/styled";
import { Paper, TextField, Stack, Badge, Avatar } from "@mui/material";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  gap: 0.5rem;
`;

export const UserNavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #3a3a3a;
`;

export const UserIconBox = styled.i`
  color: ${({ theme, active }) =>
    active == true ? theme.palette.primary.main : "#3A3A3A"};
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
