import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .visible {
    display: block;
  }
  .oculto {
    display: none;
  }

`;

export default GlobalStyle;