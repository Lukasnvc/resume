import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import { Arr } from "../../utils/arr";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  height: 100vh;
  background-color: #126258;
  font-family: "VT323", monospace;
`;

const Title = styled.h1`
  padding: 40px 0 10px 0;
  text-align: center;
  color: #97cba8;
  font-size: 3rem;
`;

const TopPortfolio = styled.div`
  background-color: #b8e1dd;
  color: #126258;
`;

const PortfolioPage = () => {
  return (
    <PortfolioContainer>
      <Title>Projects</Title>
      <TopPortfolio>
        {Arr.map((item) => (
          <PortfolioCard
            key={Date.now() + item.id}
            id={item.id}
            picture={item.pic[0]}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </TopPortfolio>
    </PortfolioContainer>
  );
};

export default PortfolioPage;
