
import styled from "styled-components";
import { TabTitle } from "../../utils/generalFunctions";
import { darkGreen, turqGreen } from "../../utils/colors";
import PorfolioWork from "../../components/portfolioCard/PorfolioWork";
import cocktailWheel from '../../pictures/cocktailWheel.png'
import eShop from '../../pictures/eShop.png'


const PortfolioPage = () => {
  TabTitle("Portfolio");
  return (
    <PortfolioContainer>
      <Title>Projects</Title>
      <PortfolioGrid>
        <PorfolioWork name={"Cocktail page"} link={"https://lukasnvc.github.io/CocktailWheel/"} code={"https://github.com/Lukasnvc/CocktailWheel.git"} lang={'React, Styled-components, Java-script, api'} pic={cocktailWheel} />

        <PorfolioWork name={"eShop"} link={"https://lukasnvc.github.io/NewEshop/"} code={"https://github.com/Lukasnvc/NewEshop.git"} pic={eShop} lang={'Java-script, Sass, api'} />

        <PorfolioWork name={"Portfolio site"} link={"https://lukasnvc.github.io/NewEshop/"} code={"https://github.com/Lukasnvc/portfolio.git"} pic={eShop} lang={'React, Tailwind Css'} />

      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioPage;

const PortfolioContainer = styled.div`
  height: 100vh;
  background-color: ${darkGreen};
  font-family: "VT323", monospace;
`;

const Title = styled.h1`
  padding: 40px 0 10px 0;
  text-align: center;
  color: ${turqGreen};
  font-size: 3rem;
`;

const PortfolioGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: ${darkGreen};
`
