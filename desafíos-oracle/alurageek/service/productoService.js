// Probar en local con http://localhost:3000/productos
const listaProductos = () =>
    fetch("https://64d9702ce947d30a260a1886.mockapi.io/productos").then((respuesta) => respuesta.json());

const crearProducto = (imageUrl, name, price, categoria, description) => {
    return fetch('https://64d9702ce947d30a260a1886.mockapi.io/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            description,
            id: uuid.v4()
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un producto')
        });
};

const eliminarProducto = (id) => {
    return fetch(`https://64d9702ce947d30a260a1886.mockapi.io/productos/${id}`, {
        method: "DELETE",
    })
};

const detalleProducto = (id) => {
    return fetch(`https://64d9702ce947d30a260a1886.mockapi.io/productos/${id}`).then((resp) => resp.json());
};

const editarProducto = (imageUrl, name, price, categoria, description, id) => {
    return fetch(`https://64d9702ce947d30a260a1886.mockapi.io/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            description,
        })
    })
        .then(response => response)
        .catch(error => console.error(error))
};

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
};