import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 926px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Image1 = styled.img`
  margin-bottom: 1rem;
  height: 400px;
  width: 300px;
  @media only screen and (max-width: 354px) {
    height: 110vw;
    width: 80vw;
  }
`;

export const Image2 = styled.img`
  height: 400px;
  width: 500px;
  @media only screen and (max-width: 926px) {
    margin: 2rem 0;
  }
  @media only screen and (max-width: 596px) {
    width: 85vw;
    height: 75vw;
  }
`;

export const ModalImage = styled.img`
  max-height: 90vh;
  max-width: 80vw;
`;
