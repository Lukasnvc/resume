import styled from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";

const Skillitem = styled.div`
  width: 340px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Level = styled.span`
  margin-left: 10px;
  font-family: "VT323", monospace;
  color: #b8e1dd;
`;

const Stars = styled.div`
  color: #b8e1dd;
`;

const Skills = ({ itag, level, star }) => {
  const filter = (star) => {
    if (+star === 1) {
      return (
        <Stars>
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </Stars>
      );
    } else if (+star === 2) {
      return (
        <Stars>
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </Stars>
      );
    } else if (+star === 3) {
      return (
        <Stars>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
        </Stars>
      );
    } else if (+star === 4) {
      return (
        <Stars>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </Stars>
      );
    } else if (+star === 5) {
      return (
        <Stars>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Stars>
      );
    } else {
      return (
        <Stars>
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </Stars>
      );
    }
  };

  return (
    <Skillitem>
      {itag}
      <Level>{level}</Level>
      <Stars>{filter(star)}</Stars>
    </Skillitem>
  );
};

export default Skills;
