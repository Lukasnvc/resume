import React from "react";
import "./skillsPage.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Skills from "../../components/skills/Skills";

const SkillsPage = () => {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <div className="left">
          {" "}
          <div className="skills">
            <h2 className="title">Programming languages</h2>
            <Skills
              itag={<i class="fa-brands fa-html5"></i>}
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={<i class="fa-brands fa-css3-alt"></i>}
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={<i class="fa-brands fa-sass"></i>}
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={<i class="fa-brands fa-js"></i>}
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={<i class="fa-brands fa-bootstrap"></i>}
              level={"Beginner"}
              star={2}
            />
            <Skills
              itag={<i class="fa-brands fa-node"></i>}
              level={"Beginner"}
              star={2}
            />
            <Skills
              itag={<i class="fa-brands fa-react"></i>}
              level={"Beginner"}
              star={2}
            />
          </div>
        </div>

        <div className="right">
          <h1>visa info</h1>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SkillsPage;
