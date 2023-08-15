
const url = new URL(window.location);
const usuarioValido = url.searchParams.get("user");

function hola() {
    if (!usuarioValido) {
        const barra = document.getElementsByClassName("productos__icons-container");
        for (let i = 0; i < barra.length; i++) {
            barra[i].classList.add("ocultar");
        }
    }
}

setTimeout(hola, 300);