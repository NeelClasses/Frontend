import styled, { createGlobalStyle } from "styled-components";
import { constants } from "./constants";

const GlobalStyles = createGlobalStyle`
    :root {
      --primary-color: ${constants.colors.primaryColor};
      --secondary-color: ${constants.colors.secondaryColor};
      --background-color:  ${constants.colors.backgroundColor};
    }
    html {
      box-sizing: border-box;
      scroll-behavior: smooth;
      animation: fadeInAnimation ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      background-color: var(---background-color);

      @keyframes fadeInAnimation {
          0% {
              opacity: 0;
          }
          100% {
              opacity: 1;
          }
      }
    }
  *{
    margin:0;
    padding:0;
    box-sizing: inherit;
    font-family: 'Noto Sans Display', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    outline:none;
    background-color:transparent;
    border: none;
    color: var(--primary-color);
    font-size: 18px;
  }
  img {
    width: 100%;
  }
  .stopScroll {
    overflow: hidden;
  }
  #recaptcha {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Section = styled.section`
  padding: 3rem 0;
`;
