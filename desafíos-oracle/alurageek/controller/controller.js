import { productServices } from "../service/producto-service.js";

// console.log(productServices);

const crearProducto = (imageUrl, name, price) => {
    // const box = document.createElement("tr");
    const contenido = `
    <div class="starwars__card">
        <figure class="starwars__figure">
            <img src="${imageUrl}" alt="producto xyz" class="starwars__card-img">
        </figure>
        <h4 class="starwars__name-producto">${name}</h4>
        <h3 class="starwars__price">${price}</h3>
        <a href="producto.html" class="starwars__ver-producto">Ver producto</a>
    </div>
  `;
    // box.innerHTML = contenido;
    // return box;
    return contenido;
};

const card = document.querySelector("[data-card]");

productServices
    .listaProductos()
    .then((data) => {
        data.forEach((productos) => {
            const nuevoProducto = crearProducto(productos.imageUrl, productos.name, productos.price);
            card.appendChild(nuevoProducto);
        });
    })
    .catch((error) => alert("Ocurrió un error"));