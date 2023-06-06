import styled from "@emotion/styled";
import {
  Avatar,
  Card,
  CardMedia,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

export const DashboardGroupBox = styled(Paper)`
  padding: 1rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  width: ${({ compWidth }) => (compWidth ? compWidth : "auto")};
`;

export const DashboardContainer = styled(Stack)`
  padding: 2rem 0rem 0rem 0rem;
`;

export const DashboardInnerLeftContainer = styled.section`
  width: 80%;
`;

export const DashboardInnerRightContainer = styled.section`
  width: 20%;
`;

// dashboard vitals signs

export const VitalsSectionBox = styled(Stack)``;

export const VitalsIconBox = styled(Stack)`
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

// dashboard chart styles

export const DashboardChartBox = styled(Stack)`
  margin-top: 2rem;
`;

export const ChartHeaderBox = styled(Stack)`
  align-items: center;
  justify-content: space-between;
`;

export const SelectChartRange = styled(TextField)`
  background-color: ${({ theme }) => theme.palette.violetBg};
  border: 1px solid white;
  &.Muitextfield-root {
    background-color: ${({ theme }) => theme.palette.violetBg};
  }
`;

// dashboard Activities style

export const DashboardActivitiesBox = styled(Stack)`
  margin-top: 4rem;
`;

export const DashboardCommunitiesBox = styled.div`
  width: 60%;
  margin-bottom: 2rem;
`;
export const DashboardMeetUpBox = styled.div`
  width: 40%;
  margin-bottom: 2rem;
`;
export const CommunitiesItemsBox = styled(Stack)`
  margin-top: 2rem;
`;

export const MeetUpItemsBox = styled(Stack)`
  margin-top: 2rem;
`;

export const CommunityCardContainer = styled(Paper)`
  padding: 1rem;
  background-color: white;
  width: 50%;
`;

export const CommunityCard = styled(Card)`
  width: 100%;
  box-shadow: none !important;
`;
export const CommunityMedia = styled(CardMedia)`
  height: 5.5rem;
  background-color: #efefef;
`;

// meetup components styles

export const MeetUpBox = styled(Stack)`
  align-items: center;
  justify-content: flex-start;
`;
export const MeetUpDetailBox = styled.div`
  width: 100%;
`;

export const MeetUpAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
`;

// body details comp
