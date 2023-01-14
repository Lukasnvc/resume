import React from "react";
import "./portfolioPage.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Skills from "../../components/skills/Skills";

const PortfolioPage = () => {
  return (
    <div className="main-container">
      <NavBar />
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

      <Footer />
    </div>
  );
};

export default PortfolioPage;
