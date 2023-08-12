// Probar en local con http://localhost:3000/usuarios
const listaUsuarios = () =>
    fetch('https://alurageek-two.vercel.app/usuarios').then(respuesta => respuesta.json());

const crearUsuario = (name, email, password) => {
    return fetch('https://alurageek-two.vercel.app/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            id: uuid.v4()
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un usuario')
        });
};

const detalleUsuario = (id) => {
    return fetch(`https://alurageek-two.vercel.app/usuarios/${id}`).then((resp) => resp.json());
};

const eliminarUsuario = (id) => {
    return fetch(`https://alurageek-two.vercel.app/usuarios/${id}`, {
        method: 'DELETE',
    });
};

const editarUsuario = (name, email, password, id) => {
    return fetch(`https://alurageek-two.vercel.app/usuarios/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
        .then(response => response)
        .catch(error => console.error(error))
};

export const userServices = {
    listaUsuarios,
    crearUsuario,
    eliminarUsuario,
    detalleUsuario,
    editarUsuario,
}

