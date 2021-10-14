import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
      --primary-color: #002a45;
      --secondary-color: #fea713;
    }
    html {
      box-sizing: border-box;
      scroll-behavior: smooth;
      animation: fadeInAnimation ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      background-color: #fffcf7;

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
`;

export default GlobalStyles;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
