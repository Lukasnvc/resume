import styled from "styled-components";
export const CarouselContainer = styled.div`
  width: 100vw;
  height: 75vh;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  background-color: #b8e1dd;
  padding-top: 5px;
  padding - bottom: 5px;
`;

export const CarouselInner = styled.div`
  height: 100%;
  width: 77%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  margin: 0 auto;
`;

export const CarouseSides = styled.div`
  flex: 5%;
  height: 100%;
  background-color: rgb(17, 97, 87, 0.5);
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: #f9cc7b;
  }
`;

export const CarouselCenter = styled.div`
  flex: 90%;
  height: 100%;
`;
