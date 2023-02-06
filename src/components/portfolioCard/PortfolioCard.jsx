import Button from "../button/Button";
import {
  PortfCard,
  CardTextRight,
  CardTitle,
  CardSubtitle,
  LangSubtitle,
  CardPicLeft,
  ImgOfCard,
} from "./portfolioCardStyledComponenets";

const PortfolioCard = ({ picture, title, subtitle, id }) => {
  return (
    <PortfCard key={title}>
      <CardPicLeft>
        <ImgOfCard src={picture} alt={title} key={picture} />
      </CardPicLeft>
      <CardTextRight>
        <CardTitle key={title}>{title}</CardTitle>
        <CardSubtitle key={subtitle}>
          <LangSubtitle>Languages used:</LangSubtitle>
          {subtitle}
        </CardSubtitle>

        <Button color={"#062925"} id={+id}>
          Details
        </Button>
      </CardTextRight>
    </PortfCard>
  );
};

export default PortfolioCard;
