const EMAIL = document.getElementById('email')
const ERROR = document.getElementById('error')
const USER_EMAIL = document.getElementById('message__user--email')
const SUBMIT_BUTTON = document.getElementById('form__button')
const DISMISS_BUTTON = document.getElementById('message__button')
const SECTION_MAIN = document.getElementById('main')
const SECTION_MESSAGE = document.getElementById('message')

function verificarMail(e) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const correo = e.target.value
    if (!correoRegex.test(correo)) {
        EMAIL.dataset.error = "true"
        EMAIL.classList.add('invalid');
        ERROR.style.display = "block"
        valido = false
    } else {
        EMAIL.dataset.error = "false"
        EMAIL.classList.remove('invalid');
        ERROR.style.display = "none"
        valido = true
    }
}

SUBMIT_BUTTON.addEventListener('click', (e) => {
    e.preventDefault()
    if (valido) {
        SECTION_MAIN.style.display = "none"
        SECTION_MESSAGE.style.display = "grid"
        USER_EMAIL.textContent = EMAIL.value
        EMAIL.value = ""
    }
})

DISMISS_BUTTON.addEventListener('click', (e) => {
    e.preventDefault()
    if (valido) {
        SECTION_MAIN.style.display = "grid"
        SECTION_MESSAGE.style.display = "none"
    }
})
