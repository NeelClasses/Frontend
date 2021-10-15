import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 70.5rem;
  .prev {
    position: absolute;
    top: 40%;
    left: 0;
    border: none;
    font-size: 1rem;
    padding: 0 10px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    transform: scale(1.5);
    color: var(--primary-color);
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next {
    position: absolute;
    top: 40%;
    right: 0;
    border: none;
    font-size: 1rem;
    padding: 0 10px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    transform: scale(1.5);
    color: var(--primary-color);
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 78.6rem;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 90vw;
  }
  @media only screen and (max-width: 1086px) {
    .prev {
      left: -2%;
    }
    .next {
      right: -2%;
    }
  }
  @media only screen and (max-width: 550px) {
    width: 90vw;
    margin-top: 6.25rem;
    .prev,
    .next {
      top: 35%;
      transform: scale(1.2);
      padding: 0 9px;
    }
  }
  @media only screen and (max-width: 376px) {
    width: 95vw;
    .prev,
    .next {
      top: 33%;
    }
  }
  @media only screen and (max-width: 321px) {
    .prev,
    .next {
      top: 30%;
      transform: scale(1);
    }
  }
`;

export const SliderHeading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 25.43rem;
  margin: 0 auto;
  @media only screen and (max-width: 550px) {
    width: 80%;
  }
`;
