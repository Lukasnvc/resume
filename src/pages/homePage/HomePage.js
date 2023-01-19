import pic from "../../IMG_4886.JPG";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
`;

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #126258;
`;

const Title = styled.h1`
  font-family: "VT323", monospace;
  font-size: 3rem;
  color: #b8e1dd;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #b8e1dd;
`;

const Subtitle = styled.h2`
  font-family: "VT323", monospace;
  color: #126258;
`;

const Avatar = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 100%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

const HomePage = () => {
  return (
    <MainContainer>
      <HomeContainer>
        <Top>
          <Title>Lukas Novickas</Title>
        </Top>
        <Bottom>
          <Subtitle>Front-End Developer</Subtitle>
        </Bottom>
        <Avatar src={pic} alt="avatar" />
      </HomeContainer>
    </MainContainer>
  );
};

export default HomePage;
