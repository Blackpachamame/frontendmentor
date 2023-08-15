import { userServices } from "../service/usuarioService.js";

const formLogin = document.querySelector('[data-login]');
// const email = "elsapopepe@gmail.com";
// const password = "sapo";

const buscarUsuario = async () => {
    try {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const listaUsuarios = await userServices.listaUsuarios()
        if (email !== null & password !== null) {
            const user = listaUsuarios.find(user => user.email == email.value && user.password == password.value);
            if (user) {
                const idUser = user.id;
                window.location.href = `./productos.html?user=${idUser}`;
            } else {
                alert("El usuario ingresado es incorrecto, intente nuevamente");
                email.value = '';
                password.value = '';
            }
        }
    } catch (error) {
        console.error('Hubo un error', error);
    }
}

// buscarUsuario();

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    buscarUsuario();
    return true;
});