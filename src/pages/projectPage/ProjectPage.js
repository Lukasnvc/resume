import "./projectPage.scss";
import { useParams } from "react-router-dom";
import { Arr } from "../../utils/arr";
import Carousel from "../../components/carouel/Carousel";

const ProjectEcommerse = () => {
  const { id } = useParams();
  const filtered = Arr.filter((x) => x.id === +id);

  return (
    <div key={Date.now()} className="project-container">
      {filtered.map((item, index) => (
        <div className="project-card" key={item.title + Date.now()}>
          <h1 className="project-title" key={Date.now()}>
            {item.title}
          </h1>

          <Carousel pictures={filtered[index].pic} />
          <div className="subtitle-container">
            <p className="project-subtitle">{item.subtitle}</p>
            <p>
              Git repository :{" "}
              <a target="blank" key={item.git} href={item.git}>
                <i class="fa-solid fa-code-branch"></i>
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectEcommerse;
