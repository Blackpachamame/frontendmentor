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
        window.location.href = "./productos.html"
        alert('Producto agregado con exito');
    }).catch(err => {
        console.log(err)
    });
})