import Education from "../../components/education/Education";
import styled from "styled-components";

const EducationContainer = styled.div`
  font-family: "VT323", monospace;
  width: 100vw;
  display: flex;
  @media screen and (max-width: 730px) {
    flex-direction: column;
  }
`;

const EducationLeft = styled.div`
  height: 100vh;
  flex: 1;
  padding: 50px 40px 0 40px;
  color: #b8e1dd;
  background-color: #106258;

  @media screen and (max-width: 730px) {
    padding: 50px 10px 0 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 50px;
  font-size: 3rem;
`;

const EducationRight = styled.div`
  flex: 1;
  height: 100vh;
  padding: 50px 40px 0 40px;
  color: #106258;
  background-color: #b8e1dd;
  @media screen and (max-width: 730px) {
    padding: 50px 20px 0 20px;
  }
`;

const EducationPage = () => {
  return (
    <EducationContainer>
      <EducationLeft>
        <Title>Education</Title>
        <Education
          yearFrom={2022}
          yearTo={2023}
          title={"CodeAcademy"}
          subtitle={"Front-End Programming"}
        />
        <Education
          yearFrom={2021}
          yearTo={2022}
          title={"Pačiolis"}
          subtitle={"Accounting and Business / Management"}
        />
        <Education
          yearFrom={2016}
          yearTo={2019}
          title={"Kauno Kolegija"}
          subtitle={"Hydrotechnical Engineering, Bachelor's degree"}
        />
        <Education
          yearFrom={2009}
          yearTo={2014}
          title={"Vytautas Magnus University"}
          subtitle={"Public Administration, Bachelor's degree"}
        />
      </EducationLeft>
      <EducationRight>
        <Title>Experience</Title>
        <Education
          yearFrom={2019}
          title={"Director Of Business Development"}
          subtitle={'UAB "Kauno gręžiniai"'}
        />
        <Education
          yearFrom={2016}
          yearTo={2019}
          title={"Project Manager"}
          subtitle={'UAB "Onrama"'}
        />
        <Education
          yearFrom={2013}
          yearTo={2016}
          title={"Company Owner"}
          subtitle={'UAB "GEOsiluma"'}
        />
        <Education
          yearFrom={2011}
          yearTo={2013}
          title={"Project Manager"}
          subtitle={'UAB "Onrama"'}
        />
        <Education
          yearFrom={2010}
          yearTo={2011}
          title={"Sales Manager"}
          subtitle={'UAB "Dagis"'}
        />
      </EducationRight>
    </EducationContainer>
  );
};

export default EducationPage;
