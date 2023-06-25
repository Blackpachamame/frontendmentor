import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

textareas.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});