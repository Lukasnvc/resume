import styled from "styled-components";
import { darkGreen, lightGreen, amber } from "../../utils/colors";
import { breakpoints } from "../../utils/breakpoints";




const PorfolioWork = ({name, link, code, pic, lang}) => {
  return (
    <Pic style={{backgroundImage: `URL(${pic})`}}>
    <CardContainer>
      <span>{name}</span>
      <BtnLayer>
      <a href={link}>
        <button>Demo</button>
      </a>
        <a href={code}><button>Code</button></a>
        </BtnLayer>
        <p>Made with: {lang}</p>
      </CardContainer>
      </Pic>
  );
}

export default PorfolioWork;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;

  span {
    font-weight: bold;
    color: ${darkGreen};
    font-size: 2rem;
    margin-bottom: 30px;
  }
  &:hover {
    background-color: rgba(184,225,221, 0.8);
    opacity: 100%;
  }
`
const BtnLayer = styled.div`
  text-align: center;
  button {
    font-family: inherit;
    font-size: 1.5rem;
    margin: 10px;
    padding: 5px 20px;
    background-color: ${darkGreen};
    color: ${lightGreen};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(175, 166, 39, 0.56) 0px 22px 70px 4px;
        color: ${amber};
    }
  }
  a {
    text-decoration: none;
  }
`

const Pic = styled.div`
  width: 550px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 40px;
  @media screen and (max-width: ${breakpoints.tablet}){
    width: 350px;
    height: 200px;
    @media screen and (max-width: ${breakpoints.mobile}){
    width: 310px;
    height: 180px;
  }
  }
`


