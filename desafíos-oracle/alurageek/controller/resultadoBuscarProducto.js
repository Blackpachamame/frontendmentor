import { productServices } from "../service/productoService.js";
import { productView } from "../controller/mostrarProducto.js";

const productAdmin = document.querySelector('[data-search]');

const mostrarResultadoBuscado = async () => {
    const url = new URL(window.location);
    const nombreBuscado = url.searchParams.get("busqueda");

    if (nombreBuscado === null) {
        console.log("Hubo un error al momento de buscar el producto");
    }
    const nombreBuscar = nombreBuscado.toLowerCase();

    let contador = 0;
    // Resultados búsqueda
    productServices.listaProductos().then(data => {
        data.forEach(({ imageUrl, name, price, categoria, id }) => {
            const nombreProducto = name.toLowerCase();
            const nombreCategoria = categoria.toLowerCase();
            const validar = nombreProducto.includes(nombreBuscar);
            const validarCategoria = nombreCategoria.includes(nombreBuscado); //Revisar esto

            if (validar || validarCategoria) {
                const mostrarResultadoBuscado = productView.mostrarProducto(imageUrl, name, price, id);
                productAdmin.appendChild(mostrarResultadoBuscado);
                contador++;
            }
        });
        // Mostrar mensaje cuando no haya resultados
        if (contador == 0) {
            const textoInformativo = `
        <h3 class="productos__no-encontrado">No se encontraron resultados para esta búsqueda 😥</h3>
        `
            productAdmin.innerHTML = textoInformativo;
            document.querySelector('.productos__no-encontrado').parentElement.style.display = "block";
        }
    }).catch(error => alert("Ocurrio un error en la búsqueda"));
}

mostrarResultadoBuscado();