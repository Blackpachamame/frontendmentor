// Validaciones
const inputs = document.querySelectorAll(".data");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    url: {
        valueMissing: "Debe ingresar una url",
    },
    name: {
        valueMissing: "Debe ingresar un nombre",
    },
    categoria: {
        valueMissing: "Debe seleccionar una categoría",
    },
    precio: {
        valueMissing: "Este campo no puede estar vacío",
    },
    descripcion: {
        valueMissing: "Este campo no puede estar vacío",
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    nombre: {
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