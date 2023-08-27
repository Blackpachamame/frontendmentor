import {
  colorPrimario,
  colorSecundario,
  fondoClaro,
  contenidoClaro,
  textoFondoClaro,
  fondoOscuro,
  contenidoOscuro,
  textoFondoOscuro,
} from "./variables";

export const temaClaro = {
  header: colorPrimario,
  body: fondoClaro,
  inside: contenidoClaro,
  text: textoFondoClaro,
  filter: "",
};

export const temaOscuro = {
  header: colorSecundario,
  body: fondoOscuro,
  inside: contenidoOscuro,
  text: textoFondoOscuro,
  filter: "invert(100%)",
};
