import { darkGreen, turqGreen } from "../../utils/colors";

import PorfolioWork from "../../components/portfolioCard/PorfolioWork";
import { TabTitle } from "../../utils/generalFunctions";
import cocktailWheel from '../../pictures/cocktailWheel.png';
import eShop from '../../pictures/eShop.png';
import moviesApp from '../../pictures/movies-app.png';
import pixy from '../../pictures/pixy.png';
import portfolio from '../../pictures/portfolio.png';
import quiz from '../../pictures/quiz.png'
import smartCart from '../../pictures/smartCart.png';
import styled from "styled-components";
import techJobs from '../../pictures/techJobs.png';
import travel from '../../pictures/travel.png';
import trip from '../../pictures/trip.png';

const PortfolioPage = () => {
  TabTitle("Portfolio");
  return (
    <PortfolioContainer>
      <Title>Projects</Title>
      <PortfolioGrid>
        <PorfolioWork name={"Pixy"} link={"https://lukasnvc.github.io/pixy-app/"} code={"https://github.com/Lukasnvc/pixy-app.git"} pic={pixy} lang={'React, Styled-components, api, TanStack Query'} />
        
        <PorfolioWork name={"SmartCart"} link={"https://lukasnvc.github.io/smartcart/"} code={"https://github.com/Lukasnvc/smartcart.git"} pic={smartCart} lang={'React, Styled-components, api'} />

        <PorfolioWork name={"Quiz game"} link={"https://lukasnvc.github.io/quiz-app/"} code={"https://github.com/Lukasnvc/quiz-app.git"} pic={quiz} lang={'React, Styled-components, TypeScript, api'} />

        <PorfolioWork name={"MoviesApp"} link={"https://lukasnvc.github.io/movies-app/"} code={"https://github.com/Lukasnvc/movies-app.git"} pic={moviesApp} lang={'React, Scss, Redux Toolkit, api'} />

        <PorfolioWork name={"TripApp"} link={"https://expo.dev/@lukasnvc/trip-app?serviceType=classic&distribution=expo-go"} code={"https://github.com/Lukasnvc/trip-app-native.git"} pic={trip} lang={'React Native, Tailwind, api'} />

        <PorfolioWork name={"Travel agency"} link={"https://lukasnvc.github.io/travel-app/"} code={"https://github.com/Lukasnvc/travel-app.git"} pic={travel} lang={'React, Tailwind Css'} />
        
        <PorfolioWork name={"Cocktail page"} link={"https://lukasnvc.github.io/CocktailWheel/"} code={"https://github.com/Lukasnvc/CocktailWheel.git"} lang={'React, Styled-components, api'} pic={cocktailWheel} />

        <PorfolioWork name={"eShop"} link={"https://lukasnvc.github.io/NewEshop/"} code={"https://github.com/Lukasnvc/NewEshop.git"} pic={eShop} lang={'Java-script, Sass, api'} />

        <PorfolioWork name={"Job page"} link={"https://guodaar.github.io/typescript-testing/"} code={"https://github.com/guodaar/typescript-testing.git"} pic={techJobs} lang={'React, TypeScript, Styled-components, Git'} />

        <PorfolioWork name={"Portfolio site"} link={"https://lukasnvc.github.io/portfolio/"} code={"https://github.com/Lukasnvc/portfolio.git"} pic={portfolio} lang={'React, Tailwind Css'} />

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
