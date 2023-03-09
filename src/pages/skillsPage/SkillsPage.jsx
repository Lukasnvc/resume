import { FaBootstrap, FaNodeJs, FaSass } from "react-icons/fa";
import {
  Left,
  ListItem,
  ListPar,
  ListSpan,
  Main,
  Right,
  SkillsContainer,
  Title,
  TitleDetail,
  UnorderedList,
} from "./skillsPageStyledComponents";
import {
  SiCsswizardry,
  SiGithub,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

import { ImHtmlFive2 } from "react-icons/im";
import Skills from "../../components/skills/Skills";
import { TabTitle } from "../../utils/generalFunctions";

const SkillsPage = () => {
  TabTitle("Skills");
  return (
    <>
      <Main>
        <Left>
          <SkillsContainer>
            <Title>Programming languages</Title>
            <Skills
              itag={
                <ImHtmlFive2 style={{ fontSize: "3rem", color: "#97cba9" }} />
              }
              level={"Itermediate"}
              star={3}
            />

            <Skills
              itag={
                <SiCsswizardry style={{ fontSize: "3rem", color: "#97cba9" }} />
              }
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={<SiReact style={{ fontSize: "3rem", color: "#97cba9" }} />}
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={
                <SiJavascript style={{ fontSize: "3rem", color: "#97cba9" }} />
              }
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={
                <SiTypescript style={{ fontSize: "3rem", color: "#97cba9" }} />
              }
              level={"Itermediate"}
              star={3}
            />
            <Skills
              itag={<FaSass style={{ fontSize: "3rem", color: "#97cba9" }} />}
              level={"Itermediate"}
              star={3}
            />
             <Skills
              itag={
                <SiStyledcomponents
                  style={{ fontSize: "3rem", color: "#97cba9" }}
                />
              }
              level={"Itermediate"}
              star={3}
            />
             <Skills
              itag={
                <SiTailwindcss style={{ fontSize: "3rem", color: "#97cba9" }} />
              }
              level={"Beginner"}
              star={2}
            />
            <Skills
              itag={
                <FaBootstrap style={{ fontSize: "3rem", color: "#97cba9" }} />
              }
              level={"Beginner"}
              star={2}
            />
            <Skills
              itag={<SiGithub style={{ fontSize: "3rem", color: "#97cba9" }} />}
              level={"Beginner"}
              star={2}
            />
            <Skills
              itag={<FaNodeJs style={{ fontSize: "3rem", color: "#97cba9" }} />}
              level={"Beginner"}
              star={2}
            />
          </SkillsContainer>
        </Left>

        <Right>
          <TitleDetail>Programming journey</TitleDetail>
          <UnorderedList>
            <ListItem>
              <ListSpan>2022 summer</ListSpan>
              <ListPar>
                Started learning Programming basics CSS, HTML, JavaScript
                reading developer.mozilla.org, w3schools documentations and
                doing toturials, thats where I got hooked up.
              </ListPar>
            </ListItem>
            <ListItem>
              <ListSpan>2022 autumn</ListSpan>
              <ListPar>
                Started CodeAcademy 7 month Front-End 1-2 level studies. Program
                included: HTML, CSS, SCSS, JavaScript, intro to Git, Bootstrap,
                NodeJs, intro to MongoDb and cherry on pie - React. Here I got
                lots of usefull information using different programming
                languages solving complex tasks. Studies involved lots of
                practical assignments as well as theory to clear everythig. So
                here I got even more hooked up to progamming and spend even more
                time doing toturials extra from studies.
              </ListPar>
            </ListItem>
          </UnorderedList>
        </Right>
      </Main>
    </>
  );
};

export default SkillsPage;
