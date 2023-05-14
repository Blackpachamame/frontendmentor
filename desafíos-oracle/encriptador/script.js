const DICCIONARIO = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat' }
const SINMENSAJE = document.getElementById('sinMensaje')
const CONMENSAJE = document.getElementById('conMensaje')
const RESULTADO = document.getElementById('resultado')
const MENSAJE = document.getElementById('mensaje')
let encriptado = true

const encriptarMensaje = (text, type) => {
    for (const key in DICCIONARIO) {
        type === 'encriptar' ? (text = text.replaceAll(key, DICCIONARIO[key])) : (text = text.replaceAll(DICCIONARIO[key], key))
    }
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

const start = (type) => mostrarResultado(encriptarMensaje(MENSAJE.value, type))