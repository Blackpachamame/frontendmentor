import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;