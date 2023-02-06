import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const ItemAbout = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  @media screen and (max-width: ${breakpoints.tablet}) {
    gap: 30px;
  }
`;

export const Year = styled.span`
  font-family: "VT323", monospace;
  font-size: 1.2rem;
  text-align: center;
`;

export const RightAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleAbout = styled.h4`
  text-align: center;
  font-size: 1.3rem;
  margin: 10px auto;
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

export const SubtitleAbout = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 10px auto;
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;
