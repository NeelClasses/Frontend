import styled from "styled-components";

export const VideoContainer = styled.div`
  height: 100%;
  max-width: 50vh;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  input[type="range"] {
    color: var(--secondary-color);
    &:hover {
      cursor: pointer;
    }
  }
  .plyr__control--overlaid {
    &,
    &:hover {
      background-color: var(--secondary-color);
    }
    &:hover {
      @media only screen and (max-width: 512px) {
        transform: scale(1.4) translate(-32%, -34%);
      }
    }
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  animation: ${({ open }) =>
    `${
      open ? "modalFadeIn" : "modalFadeOut"
    } 0.4s cubic-bezier(0, 0, 0.33, 1) `};
  @keyframes modalFadeIn {
    0% {
      background: rgba(67, 84, 101, 0);
    }
    100% {
      background: rgba(67, 84, 101, 0.65);
    }
  }
  @keyframes modalFadeOut {
    0% {
      background: rgba(67, 84, 101, 0.65);
    }
    100% {
      background: rgba(67, 84, 101, 0);
    }
  }
  @media (min-width: 768px) {
    animation: ${({ open }) =>
      `${
        open ? "modalFadeIn" : "modalFadeOut"
      } 0.2s cubic-bezier(0, 0, 0.33, 1) `};
  }
`;

export const VideoModalContainer = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -6rem;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 1023px) {
    right: -3rem;
  }
  @media only screen and (max-width: 500px) {
    right: -1rem;
    top: -3rem;
  }
`;
