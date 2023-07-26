import { productServices } from "../service/productoService.js";

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
        alert("Hubo un Error")
    }
};

if (id) {
    getInfo();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        productServices.updateItem(imgUrl.value, nombre.value, precio.value, categoria.value, descripcion.value, id).then(() => {
            alert('Producto editado con exito')
            window.location.href = './productos.html'
        })
    })
} else {
    alert("ERROR, no se encontro el id")
}


