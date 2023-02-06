import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { darkGreen, lightGreen, turqGreen } from "../../utils/colors";

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: "VT323", monospace;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: ${darkGreen};
  width: 50vw;

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${turqGreen};
  font-weight: 400;
  font-size: 2rem;
  margin: 60px auto;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  background-color: ${lightGreen};
  color: ${darkGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 50vw;

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 100vw;
    padding: 20px 0;
  }
`;

export const TitleDetail = styled.h1`
  margin-top: 50px;
  text-align: center;
`;

export const UnorderedList = styled.ul`
  padding: 0;
  line-height: 1.5;
  margin: 0 70px;
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 0 30px;
  }
`;

export const ListItem = styled.li`
  margin: 40px auto;
  list-style-type: none;
`;

export const ListSpan = styled.span`
  display: block;
  text-align: center;
  font-size: 1.3rem;
`;

export const ListPar = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  text-indent: 50px;
`;
