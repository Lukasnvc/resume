import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgPhone } from "react-icons/cg";
import styled from "styled-components";
import Button from "../../components/button/Button";

const ContactsPage = () => {
  return (
    <ContactContainer>
      <Top>
        <Title>Feel free to contact me &#9786;</Title>
      </Top>
      <Bottom>
        <form
          method="POST"
          action="https://getform.io/f/9de09819-6a67-474d-8106-2a6bf9a994e2">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea name="message" rows="5" placeholder="Message"></textarea>
          <button type="submit">Let's Collaborate</button>
        </form>
      </Bottom>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8e1dd;
  form {
    display: flex;
    flex-direction: column;
    width: 600px;

    input,
    textarea {
      margin-bottom: 20px;
      padding: 5px;
      border: none;
      color: #126258;
      font-family: "VT323", monospace;
      font-size: 1.2rem;
      background-color: #e2f3f1;
      outline: none;
    }

    button {
      font-family: "VT323", monospace;
      background-color: #126258;
      color: #b8e1dd;
      font-size: 1.2rem;
      padding: 7px 25px;
      border: none;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
        rgba(0, 0, 0, 0.05) 0px 5px 10px;
      margin: 0px auto;
      transition: 300ms;
      &:hover {
        cursor: pointer;
        box-shadow: rgba(175, 166, 39, 0.56) 0px 22px 70px 4px;
        color: #f9cc7b;
      }
    }
    @media screen and (max-width: 700px) {
      width: 350px;
    }
  }
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
