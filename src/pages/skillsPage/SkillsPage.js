import React from "react";
import "./skillsPage.scss";
import Skills from "../../components/skills/Skills";

const SkillsPage = () => {
  return (
    <>
      <div className="main-container">
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
          <h1 className="title-detail">Programming journey</h1>
          <ul>
            <li>
              <span>2022 summer</span>
              <p>
                Started learning Programming basics CSS, HTML, JavaScript
                reading developer.mozilla.org, w3schools documentations and
                doing toturials, thats where I got hooked up.
              </p>
            </li>
            <li>
              <span>2022 autumn</span>
              <p>
                Started CodeAcademy 7 month Front-End 1-2 level studies. Program
                included: HTML, CSS, SCSS, JavaScript, intro to Git, Bootstrap,
                NodeJs, intro to MongoDb and cherry on pie - React. Here I got
                lots of usefull information using different programming
                languages solving complex tasks. Studies involved lots of
                practical assignments as well as theory to clear everythig. So
                here I got even more hooked up to progamming and spend even more
                time doing toturials extra from studies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
