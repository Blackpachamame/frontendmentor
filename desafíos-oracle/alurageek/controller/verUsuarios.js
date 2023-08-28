import { userServices } from "../service/usuarioService.js";

const nuevoUsuario = (name, email, password, id) => {
    const addUser = document.createElement("tr");
    addUser.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>
          <ul class="usuarios__button-control">
            <li>
                <a href="./editar-usuario.html?id=${id}" class="usuarios__edit" data-editUser>Editar</a>
            </li>
            <li>
                <button class="usuarios__delete" type="button" id="${id}" data-deleteUser>Eliminar</button>
            </li>
          </ul>
       </td>`;

    const deleteBtn = addUser.querySelector('[data-deleteUser]');
    deleteBtn.addEventListener('click', () => {
        if (id) {
            userServices.eliminarUsuario(id)
                .then((id) => {
                    render();
                })
                .catch((err) => console.error("Hubo un error", err))
        }
    });

    return addUser;
};

const user = document.querySelector('[data-users]');

const render = async () => {
    try {
        const listaUsuarios = await userServices.listaUsuarios()
        if (user) {
            user.innerHTML = '';
            listaUsuarios.forEach((elemento) => {
                user.appendChild(nuevoUsuario(elemento.name, elemento.email, elemento.password, elemento.id))
            });
        }
    } catch (error) {
        console.error('Hubo un error', error)
    }
}

render();