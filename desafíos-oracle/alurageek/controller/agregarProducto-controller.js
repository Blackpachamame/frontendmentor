import { productServices } from "../service/producto-service.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("name").value;
    const url = document.getElementById("url").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const categoria = document.getElementById("categoria").value;
    console.log(categoria)

    // const [selectedCategory] = [].filter
    //     .call(categoria.options, option => option.selected)
    //     .map(option => option.text);

    productServices.crearProducto(url, categoria, nombre, precio, descripcion).then(respuesta => {
        alert('El PRODUCTO FUE CREADO CON EXITO')

        window.location.href = '../agregar-producto.html'

        console.log(respuesta)
    }).catch(err => {
        console.log(err)
    });
})


// Validaciones
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