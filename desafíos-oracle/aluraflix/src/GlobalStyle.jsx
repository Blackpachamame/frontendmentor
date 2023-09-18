import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: rgb(42, 122, 228);
  --color-frontend: rgb(107, 209, 255);
  --color-backend: rgb(0, 200, 111);
  --color-mobile: rgb(255, 186, 5);
  --color-ux: rgb(220, 110, 190);
  --color-devops: rgb(241, 97, 101);
  --color-marketing: rgb(107, 91, 226);
  --color-inovation: rgb(255, 140, 42);
  --color-data-science: rgb(156, 211, 59);
  --color-black-dark: rgb(9, 9, 16);
  --color-black-medium: rgb(30, 36, 47);
  --color-black-light: rgb(92, 92, 92);
  --color-black-lighter: rgb(158, 158, 158);
  --color-gray-dark: rgb(194, 194, 194);
  --color-gray-medium: rgb(229, 229, 229);
  --color-gray-light: rgb(245, 245, 245);
  --color-error-dark: rgb(198, 40, 40);
  --color-error-medium: rgb(229, 57, 53);
  --color-error-light: rgb(252, 231, 231);
  --shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  --ff-title: "Chakra Petch", sans-serif;
  --ff-body: "Inter", sans-serif;
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

img,
svg {
  max-width: 100%;
  display: block;
}

ul,
li {
  list-style: none;
  white-space: nowrap;
}

.header__nav--busca--visible {
  -webkit-transform: translateY(63px);
  transform: translateY(63px);
}

/* Arrows */
.leftArrow {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
}

.rightArrow {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
}

.active {
  background: #ccc;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

/* Slider Top */
.sliderTop .slick-slide {
    padding-inline: 10px;
}

.sliderTop .slick-dots li button:before {
  font-size: 6px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.2;
  color: #27a6bd;
}

.sliderTop .slick-dots li.slick-active button:before {
  opacity: 1;
  color: #27a6bd;
}

/* Slider Videos */
.sliderVideos .slick-list,
.sliderVideos .slick-slider,
.sliderVideos .slick-track {
  padding: 1.5rem 0;
}

.sliderVideos .slick-list,
.sliderVideos .slick-slider,
.sliderVideos .slick-track .center {
  padding: 0;
}

.sliderVideos .center .slick-center .project {
  transform: scale(1.2);
  z-index: 10000;
  transition: all 400ms ease-in-out;
  pointer-events: all;
  opacity: 1;
  background-color: var(--color-frontend);
}

.sliderVideos .center .project {
  opacity: 0.7;
  pointer-events: none;
}

@media (max-width: 990px) {
  .sliderVideos .center .slick-center .project {
    transform: scale(1);
  }

  .sliderVideos .center .project {
    opacity: 1;
    pointer-events: all;
  }
}
`;

export default GlobalStyle;
