import { productServices } from "../service/producto-service.js";

const crearProducto = (imageUrl, name, price, id) => {
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
                <a href="#" class="productos__edit">
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
        <a href="verProducto.html?id=${id}" class="productos__ver" data-verProducto>Ver producto</a>
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

const product = document.querySelector("[data-products]");
const productStarwar = document.querySelector('[data-starwars]');
const productConsola = document.querySelector('[data-consolas]');
const productDiverso = document.querySelector('[data-diversos]');

productServices
    .listaProductos()
    .then((data) => {
        data.forEach(({ imageUrl, name, price, id }) => {
            const nuevoProducto = crearProducto(imageUrl, name, price, id);
            product.appendChild(nuevoProducto);
        });
    })
    .catch((error) => alert("Ocurrió un error"));