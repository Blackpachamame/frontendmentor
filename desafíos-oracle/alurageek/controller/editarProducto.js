import { productServices } from "../service/productoService.js";

const formulario = document.querySelector("[data-form]");
const url = new URL(window.location);
const id = url.searchParams.get("id");
const nombre = document.getElementById("name");
const imgUrl = document.getElementById("url");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");
const categoria = document.getElementById("categoria");

const obtenerInformacion = async () => {

    if (id === null) {
        window.location.href = "./error.html";
    }

    try {
        const product = await productServices.detalleProducto(id);

        if (product.imageUrl && product.name && product.price && product.categoria && product.description && id) {
            imgUrl.value = product.imageUrl;
            nombre.value = product.name;
            precio.value = product.price;
            descripcion.value = product.description;
            categoria.value = product.categoria;
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "./error.html";
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    productServices.editarProducto(imgUrl.value, nombre.value, precio.value, categoria.value, descripcion.value, id).then(() => {
        window.location.href = "./productos.html";
        alert("Producto editado correctamente");
    });
});

