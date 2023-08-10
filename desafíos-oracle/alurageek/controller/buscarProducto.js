const searchInput = document.querySelector("[data-formsearch]");
// Enviando nombre buscado a la página de resultados de búsqueda
searchInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('[data-busqueda]').value.toLowerCase();

    if (inputValue) {
        window.location.href = `./busqueda-producto.html?busqueda=${inputValue}`;
        inputValue.value = "";
    };
    return true;
});

const verTodo = document.querySelector("[data-verconsolas]");
// Enviando categoría a la página de resultados de búsqueda
if (verTodo) {
    verTodo.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = `./busqueda-producto.html?busqueda=consolas`;
    });
}

const searchMobile = document.getElementsByClassName('header__btn-search-mobile')[0];

searchMobile.addEventListener('click', () => {
    const barra = document.getElementsByClassName("header__nav-search")[0];
    barra.style.display = "flex";
})