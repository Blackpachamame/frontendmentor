import { userServices } from "../service/usuarioService.js";

const registro = document.querySelector('[data-registro]');
registro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    userServices.crearUsuario(nombre, email, password).then(() => {
        window.location.href = "./login.html";
        alert('Usuario registrado con exito');
    }).catch(err => {
        console.log(err)
    });
})