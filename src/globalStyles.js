import { createGlobalStyle } from "styled-components";

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
`;

export default GlobalStyles;
