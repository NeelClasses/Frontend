import styled, { css } from "styled-components";

export const CourseWrapper = styled.div``;

export const CourseTitle = styled.h2`
  margin-bottom: 2rem;
  color: var(--primary-color);
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 414px) {
    font-size: 20px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 800px;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: none;
    width: fit-content;
    align-items: flex-start;
    margin: 2rem;
  }
  @media only screen and (max-width: 414px) {
    margin: 2rem 0;
  }
`;

export const LeftSection = styled.div``;

export const Image = styled.img`
  max-width: 700px;
  max-height: 280px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const Price = styled.h3`
  padding: 10px 30px;
  font-size: 2rem;
  color: #fff;
  background-color: var(--primary-color);
  text-align: center;
  width: 100%;
`;

export const EnrollBtn = styled.a`
  color: ${({ isEnrolled }) => (isEnrolled ? "#fff" : "var(--primary-color)")};
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--primary-color);
  margin-top: 2rem;
  text-decoration: none;
  font-weight: 700;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  background-color: ${({ isEnrolled }) =>
    isEnrolled ? "var(--primary-color)" : "#fff"};
  ${(props) =>
    props.isEnrolled
      ? ""
      : css`
          &:hover {
            background-color: var(--primary-color);
            color: #fff;
          }
        `}
`;

export const Details = styled.table`
  color: var(--primary-color);
  margin-top: 1.5rem;
`;

export const Detail = styled.tr`
  padding-bottom: 1rem;
`;

export const RowCell = styled.td`
  padding: 0 0.5rem;
  padding-bottom: 1rem;
`;

export const RatingSection = styled.span``;

export const Title = styled.h3`
  color: var(--primary-color);
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 800px;
  @media only screen and (max-width: 768px) {
    margin: 1rem 2rem;
  }
  @media only screen and (max-width: 414px) {
    margin: 0;
  }
`;

export const AccordionWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  position: relative;
  margin-bottom: 1.25rem;
  border: 1px solid #717171;
  @media only screen and (max-width: 414px) {
    padding: 0.6rem;
  }
`;

export const AccordionHeading = styled.button`
  display: flex;
  background-color: #fff;
  border: none;
  width: 100%;
  color: var(--primary-color);
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
`;

export const HeadingText = styled.span``;

export const PlusIcon = styled.span`
  color: var(--primary-color);
  font-size: 29px;
  line-height: 29px;
  font-weight: 500;
  align-self: center;
  transform: ${(props) => (props.isActive ? "rotate(45deg)" : "rotate(0deg)")};
  transition: all 400ms ease-in-out;
`;

export const AccordionContent = styled.div`
  color: #1f1f1f;
  max-height: ${(props) => (props.isActive ? "9999px" : 0)};
  background-color: var(---background-color);
  overflow: hidden;
  transition: all
    ${({ isActive }) =>
      isActive ? "400ms cubic-bezier(1,0,1,0)" : "400ms cubic-bezier(0,1,0,1)"};
`;

export const AccordionText = styled.div`
  padding: 1rem 0;
  border-bottom: ${({ isActive }) => (isActive ? "1px solid #e3e3e3" : "none")};
`;

export const VideoContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  /* max-width: 50vh;
  width: 80vw; */
  margin: 0 auto;
  position: relative;
  input[type="range"] {
    color: var(--secondary-color);
    &:hover {
      cursor: pointer;
    }
  }
  /* .plyr__control:hover {
    background-color: var(--secondary-color);
  } */
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
    /* &::after {
      content: "";
      width: 3.5rem;
      height: 3.5rem;
      position: absolute;
      border-radius: 50%;
      border: 5px solid #bad7f7;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    opacity: 1;
    left: 47%;
    top: 45%;
    @media only screen and (max-width: 768px) {
      left: 45.5%;
      top: 42%;
      transform: scale(1.55);
    }
    @media only screen and (max-width: 426px) {
      left: 50%;
      top: 50%;
      transform: scale(1.4) translate(-32%, -34%);
    } */
  }
  @media only screen and (max-width: 660px) {
    div:first-child {
      max-width: 90vw;
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
  z-index: 1000;
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
    right: -2rem;
  }
`;

export const NoteLink = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  cursor: pointer;
`;
