export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, input);
    }
}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Debe ingresar un nombre",
    },
    email: {
        valueMissing: "Debe ingresar un email",
        typeMismatch: "El email no es válido",
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacío",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
    },
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}