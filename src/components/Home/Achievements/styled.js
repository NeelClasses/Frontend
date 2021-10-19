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
`;

export const Image1 = styled.img`
  margin-bottom: 1rem;
  height: 400px;
  width: 300px;
`;

export const Image2 = styled.img`
  height: 400px;
  width: 500px;
`;

export const ModalImage = styled.img`
  max-height: 80vh;
  cursor: ${({ isZoom }) => (isZoom ? "zoom-out" : "zoom-in")};
  transform: ${({ isZoom }) => (isZoom ? "scale(2)" : "none")};
`;
