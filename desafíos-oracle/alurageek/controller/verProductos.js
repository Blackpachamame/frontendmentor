import { productServices } from "../service/productoService.js";
import { productView } from "../controller/mostrarProducto.js";

// Página de productos (todos)
const productAdmin = document.querySelector("[data-products]");
// Página de index
const productStarwar = document.querySelector('[data-starwars]');
const productConsola = document.querySelector('[data-consolas]');
const productDiverso = document.querySelector('[data-diversos]');
// Página de ver producto
const product = document.querySelector('[data-producto]');
const productSimilar = document.querySelector('[data-similares]');

const render = async () => {
    try {
        const allProducts = await productServices.listaProductos();

        if (productAdmin) {
            productAdmin.innerHTML = '';
            allProducts.forEach(elemento => {
                productAdmin.appendChild(productView.mostrarProducto(elemento.imageUrl, elemento.name, elemento.price, elemento.id));
            });
        }
        if (productStarwar) {
            productStarwar.innerHTML = '';
            allProducts.filter(product => product.categoria === 'StarWars').forEach(elemento => {
                productStarwar.appendChild(productView.mostrarProducto(elemento.imageUrl, elemento.name, elemento.price, elemento.id));
            });
        }
        if (productConsola) {
            productConsola.innerHTML = '';
            allProducts.filter(product => product.categoria === 'Consolas').forEach(elemento => {
                productConsola.appendChild(productView.mostrarProducto(elemento.imageUrl, elemento.name, elemento.price, elemento.id));
            });
        }
        if (productDiverso) {
            productDiverso.innerHTML = '';
            allProducts.filter(product => product.categoria === 'Diversos').forEach(elemento => {
                productDiverso.appendChild(productView.mostrarProducto(elemento.imageUrl, elemento.name, elemento.price, elemento.id));
            });
        }
        if (product) {
            const url = new URL(window.location);
            const idProducto = url.searchParams.get("id");
            product.innerHTML = '';
            allProducts.filter(product => product.id === idProducto).forEach(elemento => {
                product.appendChild(productView.verProducto(elemento.imageUrl, elemento.name, elemento.price, elemento.categoria, elemento.description, elemento.id));
            });
        }
        if (productSimilar) {
            const url = new URL(window.location);
            const idProducto = url.searchParams.get("id");
            productSimilar.innerHTML = '';
            const producto = allProducts.filter(product => product.id === idProducto);
            allProducts.filter(product => product.categoria === producto[0].categoria && product.id !== idProducto).forEach(elemento => {
                productSimilar.appendChild(productView.mostrarProducto(elemento.imageUrl, elemento.name, elemento.price, elemento.id));
            });
        }
    } catch (err) {
        console.error("Ocurrió un error", err);
    }
};

render();