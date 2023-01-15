import "./educationPage.scss";
import Education from "../../components/education/Education";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-left">
        <h1>Education</h1>
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
      </div>
      <div className="education-right">
        <h1>Experience</h1>
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
      </div>
    </div>
  );
};

export default EducationPage;
