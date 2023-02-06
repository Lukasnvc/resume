import { useParams } from "react-router-dom";
import { Arr } from "../../utils/arr";
import Carousel from "../../components/carouel/Carousel";
import styled from "styled-components";
import { GoGitBranch } from "react-icons/go";
import { TabTitle } from "../../utils/generalFunctions";
import { amber, darkGreen, lightGreen } from "../../utils/colors";
import { breakpoints } from "../../utils/breakpoints";

const ProjectEcommerse = () => {
  TabTitle("Project");
  const { id } = useParams();
  const filtered = Arr.filter((x) => x.id === +id);

  return (
    <ProjectContainer key={Date.now()}>
      {filtered.map((item, index) => (
        <ProjectCard key={item.title + Date.now()}>
          <ProjectTitle key={Date.now()}>{item.title}</ProjectTitle>

          <Carousel pictures={filtered[index].pic} />
          <SubtitleContainer>
            <p>{item.subtitle}</p>
            <p>
              Git repository :{" "}
              <NavigateToGit target="blank" key={item.git} href={item.git}>
                <GoGitBranch style={{ margin: "auto" }} />
              </NavigateToGit>
            </p>
            <p>Days on project: {item.time}</p>
          </SubtitleContainer>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default ProjectEcommerse;

const ProjectContainer = styled.div`
  font-family: "VT323", monospace;
  color: ${lightGreen};
  background-color: ${darkGreen};
`;

const ProjectTitle = styled.h1`
  padding-top: 35px;
  margin: 15px 0;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  height: 100vh;
`;

const SubtitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${darkGreen};

  @media screen and (max-width: ${breakpoints.laptop}) {
    flex-direction: column;
  }
`;

const NavigateToGit = styled.a`
  color: black;
  margin: 3px;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    color: ${amber};
  }
`;
