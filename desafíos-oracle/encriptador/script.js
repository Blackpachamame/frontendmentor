const SINMENSAJE = document.getElementById('sinMensaje')
const CONMENSAJE = document.getElementById('conMensaje')
const RESULTADO = document.getElementById('resultado')
const MENSAJE = document.getElementById('mensaje')
let encriptado = true

const encriptarMensaje = (text, type) => {
    type === 'encriptar'
        ? (text = text.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat"))
        : (text = text.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u"));
    return text
}

const mostrarResultado = (text) => {
    RESULTADO.textContent = text
    SINMENSAJE.classList.toggle('ocultar', encriptado)
    CONMENSAJE.classList.toggle('ocultar', !encriptado)
}

const copiarTexto = () => navigator.clipboard.writeText(RESULTADO.textContent)

const restringirTexto = (e) => {
    MENSAJE.value = e.target.value.replaceAll(/[^a-z\s]+/g, '')
}

const tipo = (type) => {
    MENSAJE.value.trim() === ""
        ? (alert("Debe ingresar un texto"))
        : (mostrarResultado(encriptarMensaje(MENSAJE.value, type)));
}