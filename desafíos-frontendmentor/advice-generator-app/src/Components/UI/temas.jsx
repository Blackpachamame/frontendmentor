import {
  lightCyanText,
  neonGreen,
  grayishBlue,
  darkBlueBackground,
  darkGrayishBlue,
} from "./variables";

export const temaClaro = {
  background: darkBlueBackground,
  body: darkGrayishBlue,
  title: neonGreen,
  text: lightCyanText,
  filter: "",
};

export const temaOscuro = {
  background: darkGrayishBlue,
  body: lightCyanText,
  title: neonGreen,
  text: darkBlueBackground,
  filter: "invert(100%)",
};
