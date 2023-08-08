import { userServices } from "../service/usuarioService.js";

const editUser = document.querySelector("[data-edituser]");
const url = new URL(window.location);
const id = url.searchParams.get("id");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const obtenerInformacion = async () => {

    if (id === null) {
        // window.location.href = "./error.html";
        alert("Ocurrió un error");
    }

    try {
        const user = await userServices.detalleUsuario(id);

        if (user.name && user.email && user.password && id) {
            name.value = user.name;
            email.value = user.email;
            password.value = user.password;
        } else {
            throw new Error();
        }
    } catch (error) {
        // window.location.href = "./error.html";
        alert("Ocurrió un error");
    }
};

obtenerInformacion();

editUser.addEventListener("submit", (evento) => {
    evento.preventDefault();
    userServices.editarUsuario(name.value, email.value, password.value, id).then(() => {
        window.location.href = "./usuarios.html";
        alert("Usuario agregado correctamente");
    });
});

