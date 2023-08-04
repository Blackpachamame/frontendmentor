import { productServices } from "../service/productoService.js";
import { productView } from "../controller/mostrarProducto.js";

const productAdmin = document.querySelector("[data-products]");
const productStarwar = document.querySelector('[data-starwars]');
const productConsola = document.querySelector('[data-consolas]');
const productDiverso = document.querySelector('[data-diversos]');

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
    } catch (err) {
        console.error("Ocurrió un error", err);
    }
};

render();