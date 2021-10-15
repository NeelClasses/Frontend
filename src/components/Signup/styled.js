import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignupWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 592px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 592px) {
    width: 100vw;
  }
`;

export const RightSection = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  @media only screen and (max-width: 592px) {
    width: 100vw;
    height: fit-content;
    padding: 5rem 0;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  /* margin: 2rem 5rem; */
  position: absolute;
  top: 2rem;
  left: 5vw;
  svg {
    height: 2.5rem;
    width: 2.5rem;
    filter: invert(9%) sepia(74%) saturate(2313%) hue-rotate(184deg)
      brightness(98%) contrast(102%);
  }
  span {
    margin-left: 1rem;
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 600;
  }
  @media only screen and (max-width: 414px) {
    span {
      margin-left: 0.5rem;
      font-size: 16px;
    }
    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }
`;

export const SignupContent = styled.div`
  width: 100%;
  display: flex;
`;

export const LeftContent = styled.div``;

export const Form = styled.form`
  max-width: 300px;
  margin: 0 1.5rem;
`;

export const FormHeading = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  @media only screen and (max-width: 414px) {
    font-size: 18px;
  }
`;

export const TextElement = styled(TextField)`
  && {
    margin-bottom: 1.5rem;
  }
`;

export const RightContent = styled.div`
  max-width: 80%;
  color: #fff;
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
  @media only screen and (max-width: 414px) {
    font-size: 22px;
  }
`;

export const SubHeading = styled.p`
  max-width: 300px;
  font-size: 18px;
  @media only screen and (max-width: 414px) {
    font-size: 16px;
  }
`;

export const BottomText = styled.p`
  margin-top: 1rem;
  color: var(--primary-color);
`;

export const BottomLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  color: var(--primary-color);
`;
