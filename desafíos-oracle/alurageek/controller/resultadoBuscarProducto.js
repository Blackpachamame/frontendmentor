import { productServices } from "../service/productoService.js";

const productAdmin = document.querySelector('[data-search]');

const mostrarProducto = (imageUrl, name, price, id) => {
    const box = document.createElement("div");
    const contenido = `
        <figure class="productos__figure">
            <img src="${imageUrl}" alt="producto xyz" class="productos__card-img">
            <div class="productos__icons-container">
                <!-- Btn Editar -->
                <button class="productos__delete" id="${id}">
                    <svg class="delete" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_996)">
                            <path id="Vector" d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_996">
                                <rect width="24" height="24" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <!-- Btn Borrar -->
                <a href="./editar-producto.html?id=${id}" class="productos__edit">
                    <svg class="edit" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_993)">
                            <path id="Vector" d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_993">
                                <rect width="24" height="24" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </figure>
        <h4 class="productos__name">${name}</h4>
        <h3 class="productos__price">${price}</h3>
        <a href="http://127.0.0.1:5500/desaf%C3%ADos-oracle/alurageek/pages/ver-producto.html?id=${id}" class="productos__ver" data-verProducto>Ver producto</a>
  `;
    box.innerHTML = contenido;
    box.classList.add('productos__card');

    // Capturando evento onclick del boton eliminar
    const btnDelete = box.querySelector("button");
    btnDelete.addEventListener("click", () => {
        const id = btnDelete.id;
        productServices.eliminarProducto(id).then((respuesta) => {
            console.log(respuesta);
        }).catch((err) => alert("Ocurrió un error"));
    });

    return box;
};

const mostrarResultadoBuscado = async () => {
    const url = new URL(window.location);
    const nombreBuscado = url.searchParams.get("busqueda");

    if (nombreBuscado === null) {
        console.log("Hubo un error al momento de buscar el producto");
    }
    const nombreBuscar = nombreBuscado.toLowerCase();

    let cantidadResultados = 0;
    //Resultados busqueda
    productServices.listaProductos().then(data => {
        data.forEach(({ imageUrl, name, price, categoria, id }) => {
            const nombreProducto = name.toLowerCase();
            const nombreCategoria = categoria.toLowerCase();
            const validar = nombreProducto.includes(nombreBuscar);
            const validarCategoria = nombreCategoria.includes(nombreBuscado); //Revisar esto

            if (validar || validarCategoria) {
                const mostrarResultadoBuscado = mostrarProducto(imageUrl, name, price, id);
                productAdmin.appendChild(mostrarResultadoBuscado);
                cantidadResultados++;
            }
        });
        //Mostrar mensajes cuando no haya resultados
        if (cantidadResultados == 0) {
            const textoInformativo = `
        <h3 class="productos__no-encontrado">No se encontraron resultados para esta búsqueda 😥</h3>
        `
            productAdmin.innerHTML = textoInformativo;
            document.querySelector('.productos__no-encontrado').parentElement.style.display = "block";
        }
    }).catch(error => alert("Ocurrio un error en producto buscado"));
}

mostrarResultadoBuscado();