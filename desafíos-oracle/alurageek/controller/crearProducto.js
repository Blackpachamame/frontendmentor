import { productServices } from "../service/productoService.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("name").value;
    const url = document.getElementById("url").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const categoria = document.getElementById("categoria").value;

    productServices.crearProducto(url, nombre, precio, categoria, descripcion).then(() => {
        alert('Producto agregado con exito')
        window.location.href = './productos.html'
    }).catch(err => {
        console.log(err)
    });
})


// Validaciones
const inputs = document.querySelectorAll(".data");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

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