import styled from "@emotion/styled";

export const UserLayoutContainer = styled.main`
  width: 100%;
`;

export const UserLayoutRightBox = styled.section`
  position: relative;
  width: 85%;
  margin-inline-start: auto;
`;

export const TopNavBox = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  padding: ${({ ai }) => (ai === "true" ? "0rem" : "1rem 0rem 1rem 0.5rem")};
  /* background-color: blue; */
  background-color: ${({ theme }) => theme.palette.bodyBg};
  z-index: 1;
`;

export const UserBody = styled.section`
  margin-top: ${({ ai }) => (ai === "true" ? "0rem" : "2rem ")};
  padding: ${({ ai }) => (ai === "true" ? "0rem" : "0rem 0rem 2rem 0.5rem")};
`;
