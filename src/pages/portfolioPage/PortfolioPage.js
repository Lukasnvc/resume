import React from "react";
import "./portfolioPage.scss";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import { Arr } from "../../utils/arr";

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <h1 className="title">Projects</h1>
      <div className="top-portfolio">
        {Arr.map((item) => (
          <PortfolioCard
            key={Date.now() + item.id}
            id={item.id}
            picture={item.pic[0]}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>

      <div className="bottom-portfolio"></div>
    </div>
  );
};

export default PortfolioPage;
