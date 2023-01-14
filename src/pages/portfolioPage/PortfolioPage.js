import React from "react";
import "./portfolioPage.css";
import Skills from "../../components/skills/Skills";

const PortfolioPage = () => {
  return (
    <div className="main-container">
      <div className="content">
        <h1> Portfolio</h1>
        <Skills
          itag={<i class="fa-brands fa-html5"></i>}
          level={"beginner"}
          star={3}
        />
        <Skills level={"beginner"} star={3} />
        <Skills level={"beginner"} star={3} />
        <Skills level={"beginner"} star={3} />
      </div>
    </div>
  );
};

export default PortfolioPage;
