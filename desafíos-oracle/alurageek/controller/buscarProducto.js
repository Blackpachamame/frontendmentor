const searchInput = document.querySelector("[data-formsearch]");
//Enviando nombre buscado a la página de resultados de búsqueda
searchInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('[data-busqueda]').value.toLowerCase();

    if (inputValue) {
        window.location.href = `http://127.0.0.1:5500/desaf%C3%ADos-oracle/alurageek/pages/busqueda-producto.html?busqueda=${inputValue}`;
        inputValue.value = "";
    };
    return true;
});

const verTodo = document.querySelector("[data-verconsolas]");
//Enviando categoría a la página de resultados de búsqueda
verTodo.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = `http://127.0.0.1:5500/desaf%C3%ADos-oracle/alurageek/pages/busqueda-producto.html?busqueda=consolas`;
});