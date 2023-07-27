import { productServices } from "../service/productoService.js";
/*
const form = document.querySelector('[data-form]');
const nombre = document.getElementById("name");
const imgUrl = document.getElementById("url");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");
const categoria = document.getElementById("categoria");

const url = new URL(window.location);
const id = url.searchParams.get("id");

const getInfo = async () => {
    try {
        const product = await productServices.detalleProducto(id);

        imgUrl.value = product.imageUrl;
        nombre.value = product.name;
        precio.value = product.price;
        categoria.value = product.categoria;
        descripcion.value = product.description;
    } catch (error) {
        alert("Hubo un Error");
    }
};

if (id) {
    getInfo();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        productServices.editarProducto(imgUrl.value, nombre.value, precio.value, categoria.value, descripcion.value, id).then(() => {
            console.log("funco");
            window.location.href = './productos.html';
        })

    });
} else {
    alert("ERROR, no se encontro el id");
}
*/

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        // window.location.href = "./error.html";
        console.log("error id");
    }

    const nombre = document.getElementById("name");
    const imgUrl = document.getElementById("url");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");
    const categoria = document.getElementById("categoria");

    try {
        const product = await productServices.detalleProducto(id);

        console.log(product.imgUrl);
        if (product.imgUrl && product.nombre && product.precio && product.categoria && product.descripcion && id) {
            imgUrl.value = product.imgUrl;
            nombre.value = product.nombre;
            precio.value = product.precio;
            descripcion.value = product.descripcion;
            categoria.value = product.categoria;
        } else {
            throw new Error();
        }
    } catch (error) {
        // window.location.href = "./error.html";
        console.log("error id 2");
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.getElementById("name").value;
    const imgUrl = document.getElementById("url").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const categoria = document.getElementById("categoria").value;
    productServices.editarProducto(imgUrl, nombre, precio, categoria, descripcion, id).then(() => {
        window.location.href = "./productos.html";
    });
});