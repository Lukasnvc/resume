import "./contactPage.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgPhone } from "react-icons/cg";
import { AiOutlineSmile } from "react-icons/ai";

const ContactsPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-top">
        <h1 className="contact-title">
          Feel free to contact me
          <AiOutlineSmile className="emoji" />
        </h1>
      </div>
      <div className="contact-bottom"></div>
      <div className="contact-icons">
        <a
          className="icon"
          target="blank"
          href="https://www.linkedin.com/in/lukas-novickas-930a02a3">
          {" "}
          <FaLinkedin />
        </a>{" "}
        <a className="icon" href="mailto: lukasnvc@gmail.com">
          <SiGmail />
        </a>{" "}
        <a className="icon" target="blank" href="https://github.com/Lukasnvc">
          {" "}
          <FaGithubSquare />
        </a>{" "}
        <a className="icon" href="tel:0037068225555">
          <CgPhone />
        </a>{" "}
      </div>
    </div>
  );
};

export default ContactsPage;
