import "./portfolioCard.scss";
import Button from "../button/Button";

const PortfolioCard = ({ picture, title, subtitle, id }) => {
  return (
    <div className="portfolio-card" key={title}>
      <div className="card-pic-left">
        {" "}
        <img className="main-pic" src={picture} alt={title} key={picture} />
      </div>
      <div className="card-text-right">
        <h3 className="card-title" key={title}>
          {title}
        </h3>
        <p className="card-subtitle" key={subtitle}>
          <span className="lang-subtitle">Languages used: </span>
          {subtitle}
        </p>
        <Button color={"#062925"} id={+id}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default PortfolioCard;
