import { productServices } from "../service/producto-service.js";

const crearProducto = (imageUrl, name, price, id) => {
    const box = document.createElement("div");
    const contenido = `
        <figure class="producto__figure">
            <img src="${imageUrl}" alt="producto xyz" class="producto__card-img">
        </figure>
        <h4 class="producto__name">${name}</h4>
        <h3 class="producto__price">${price}</h3>
        <a href="verProducto.html?id=${id}" class="producto__ver" data-verProducto>Ver producto</a>
  `;
    box.innerHTML = contenido;
    box.classList.add('producto__card');
    return box;
};

const card = document.querySelector("[data-card]");

productServices
    .listaProductos()
    .then((data) => {
        data.forEach((productos) => {
            const nuevoProducto = crearProducto(productos.imageUrl, productos.name, productos.price, productos.id);
            card.appendChild(nuevoProducto);
        });
    })
    .catch((error) => alert("Ocurrió un error"));