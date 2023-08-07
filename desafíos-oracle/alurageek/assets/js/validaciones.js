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
    "tooLong", //Esto es innecesario porque el input no te deja escribir mas caracteres del máximo establecido, pero lo dejo por las dudas
    "tooShort",
];

const mensajesDeError = {
    url: {
        valueMissing: "Debe ingresar una url",
    },
    name: {
        valueMissing: "Debe ingresar un nombre",
        tooLong: "Se permiten como máximo 20 caracteres",
    },
    user: {
        valueMissing: "Debe ingresar un nombre de usuario",
        tooLong: "Se permiten como máximo 20 caracteres",
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
        tooLong: "Debe tener máximo 8 caracteres",
        tooShort: "Debe tener al menos 4 caracteres",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    nombre: {
        valueMissing: "Este campo no puede estar vacío",
        tooLong: "Se permiten como máximo 40 caracteres",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        tooLong: "Se permiten como máximo 120 caracteres",
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