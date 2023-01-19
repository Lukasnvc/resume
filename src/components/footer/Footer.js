import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const TextAbout = styled.span`
  font-size: 0.6rem;
  margin: 5px;
`;

const LinkGit = styled.a`
  margin: 3px;
  color: black;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    color: #3a9188;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <TextAbout>2023 by Lukas</TextAbout>
      <LinkGit href="https://github.com/Lukasnvc" target="blank">
        <BsGithub />
      </LinkGit>
    </FooterContainer>
  );
};

export default Footer;
