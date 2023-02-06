import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const PortfCard = styled.div`
  font-family: "VT323", monospace;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const CardTextRight = styled.div`
  flex: 2;
  margin: 50px;
  text-align: center;
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 0 0 40px 0;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
`;

export const CardSubtitle = styled.span`
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`;

export const LangSubtitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardPicLeft = styled.div`
  flex: 4;
  padding: 0;
  width: 100%;
`;

export const ImgOfCard = styled.img`
  align-items: center;
  width: 90%;
  padding: 0;
  margin: 50px 5%;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 20px 5% 10px 5%;
  }
`;
