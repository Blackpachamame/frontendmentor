const listaProductos = () =>
    fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (imageUrl, name, price, categoria, description) => {
    return fetch('http://localhost:3000/productos', {
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
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    })
};

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
};