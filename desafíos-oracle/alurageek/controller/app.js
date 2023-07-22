import { valida } from "./agregarProducto-controller.js";

const inputs = document.querySelectorAll(".data");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});