const searchInput = document.querySelector("[data-formsearch]");
//Enviando nombre de la busqueda a pagina resultados busqueda
searchInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('[data-busqueda]').value.toLowerCase();

    if (inputValue) {
        window.location.href = `http://127.0.0.1:5500/desaf%C3%ADos-oracle/alurageek/pages/busqueda-producto.html?busqueda=${inputValue}`;
        inputValue.value = "";
    };
    return true;
});