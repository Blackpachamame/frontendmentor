const searchInput = document.querySelector("[data-formsearch]");
//Enviando nombre de la busqueda a pagina resultados busqueda
searchInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('[data-busqueda]').value.toLowerCase();

    if (inputValue) {
        window.location.href = `./pages/busqueda-producto.html?busqueda=${inputValue}`;
        inputValue.value = "";
    };
    return true;
});