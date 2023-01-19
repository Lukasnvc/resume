import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgPhone } from "react-icons/cg";
import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: "VT323", monospace;
`;

const Top = styled.div`
  flex: 1;
  background-color: #126258;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;

  @media screen and (max-width: 700px) {
    font-size: 1.7rem;
  }
`;

const Bottom = styled.div`
  flex: 1;
  background-color: #b8e1dd;
`;

const ContactIcons = styled.div`
  position: absolute;
  top: 43%;
  bottom: 43%;
  left: 40%;
  right: 40%;
  margin: 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    top: 45%;
    bottom: 45%;
  }
`;

const Icon = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 6rem;
  margin: 0 30px;
  color: black;
  transition: 400ms;

  @media screen and (max-width: 700px) {
    font-size: 4rem;
    margin: 0 20px;
  }

  &:hover {
    color: #f9cc7b;
  }
`;

const ContactsPage = () => {
  return (
    <ContactContainer>
      <Top>
        <Title>Feel free to contact me &#9786;</Title>
      </Top>
      <Bottom></Bottom>
      <ContactIcons>
        <Icon
          target="blank"
          href="https://www.linkedin.com/in/lukas-novickas-930a02a3">
          {" "}
          <FaLinkedin />
        </Icon>{" "}
        <Icon href="mailto: lukasnvc@gmail.com">
          <SiGmail />
        </Icon>{" "}
        <Icon target="blank" href="https://github.com/Lukasnvc">
          {" "}
          <FaGithubSquare />
        </Icon>{" "}
        <Icon href="tel:0037068225555">
          <CgPhone />
        </Icon>{" "}
      </ContactIcons>
    </ContactContainer>
  );
};

export default ContactsPage;
