import { useState } from "react";
import {
  CarouselContainer,
  CarouselInner,
  CarouseSides,
  CarouselCenter,
} from "./carouselStyledComponents";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Carousel = ({ pictures }) => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <CarouselContainer>
      <CarouselInner style={{ backgroundImage: `url(${pictures[currImg]})` }}>
        <CarouseSides
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}>
          <SlArrowLeft />
        </CarouseSides>

        <CarouselCenter></CarouselCenter>
        <CarouseSides
          onClick={() => {
            currImg < pictures.length - 1 && setCurrImg(currImg + 1);
          }}>
          {" "}
          <SlArrowRight />
        </CarouseSides>
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel;
