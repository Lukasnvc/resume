import { useState } from "react";
import "./carousel.scss";

const Carousel = ({ pictures }) => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${pictures[currImg]})` }}>
        <div
          className="carousel-left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}>
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="carousel-center"></div>
        <div
          className="carousel-right"
          onClick={() => {
            currImg < pictures.length - 1 && setCurrImg(currImg + 1);
          }}>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
