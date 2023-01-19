import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: #062925;
`;
export const LogoNav = styled.div`
  font-size: 1.2rem;
  padding: 7px;
  margin-left: 5px;
  color: #b8e1dd;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const LogoText = styled.span`
  margin-left: 1px;
  font-size: 0.4rem;
`;

export const TabsNav = styled.div`
  display: flex;
`;

export const TabNav = styled.div`
  text-decoration: none;
  color: #b8e1dd;
  font-family: "VT323", monospace;
  font-size: 1.2rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: 500ms;
  @media screen and (max-width: 480px) {
    padding: 10px 10px;
  }
  :hover {
    background-color: #044a42;
    color: #f9cc7b;
  }
`;
