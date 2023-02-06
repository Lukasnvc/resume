import styled from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";
import { lightGreen } from "../../utils/colors";

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
  color: ${lightGreen};
`;

const Stars = styled.div`
  color: ${lightGreen};
`;
