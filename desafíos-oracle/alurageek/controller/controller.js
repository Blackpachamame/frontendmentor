import { productServices } from "../service/producto-service.js";

// console.log(productServices);

const crearProducto = (imageUrl, name, price, id) => {
    const box = document.createElement("div");
    const contenido = `
        <figure class="starwars__figure">
            <img src="${imageUrl}" alt="producto xyz" class="starwars__card-img">
        </figure>
        <h4 class="starwars__name-producto">${name}</h4>
        <h3 class="starwars__price">${price}</h3>
        <a href="verProducto.html?id=${id}" class="starwars__ver-producto" data-verProducto>Ver producto</a>
  `;
    box.innerHTML = contenido;
    box.classList.add('starwars__card');
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