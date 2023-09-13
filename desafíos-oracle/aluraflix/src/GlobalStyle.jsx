import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #2A7AE4;
  --color-frontend: #6BD1FF;
  --color-backend: #00C86F;
  --color-mobile: #FFBA05;
  --color-ux: #DC6EBE;
  --color-infra: #9CD33B;
  --color-marketing: #6B5BE2;
  --colo-inovation: #FF8C2A;
  --color-data-science: #9CD33B;
  --color-black-dark: #131520;
  --color-black-medium: #1e242f;
  --color-black-light: #5C5C5C;
  --color-black-lighter: #9E9E9E;
  --color-gray-dark: #C2C2C2;
  --color-gray-medium: #E5E5E5;
  --color-gray-light: #F5F5F5;
  --color-error-dark: #C62828;
  --color-error-medium: #E53935;
  --color-error-light: #FCE7E7;
  --shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  --ff-title: 'Chakra Petch', sans-serif;
  --ff-body: 'Inter', sans-serif;
  --title-big: 60px;
  --title-medium: 46px;
  --title-small: 35px;
  --body-big: 27px;
  --body-medium: 18px;
  --body-small: 16px;
  --body-smaller: 12px;
  --title-weight: 400;
  --body-weight: 300;

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: var(--ff-body);
    font-size: var(--body-medium);
    font-weight: var(--body-weight);
    color: var(--color-gray-light);
    background-color: var(--color-black-dark);
  }

  img, svg {
    max-width: 100%;
    display: block;
  }

  .header__nav--busca--visible {
    -webkit-transform: translateY(63px);
    transform: translateY(63px);
}
`;

export default GlobalStyle;
