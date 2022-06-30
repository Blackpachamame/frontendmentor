const notifyForm = document.querySelector("form");
const inputField = document.querySelector("#email");

notifyForm.addEventListener("submit", (e) => {
    const emailInput = inputField.value;
    const errorMessage = document.querySelector(".form__error");
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailInput === "" || emailInput === null) {
        errorMessage.style.display = "block";
        inputField.classList.add("error-border");
        errorMessage.innerHTML =
            "Whoops! It looks like you forgot to add your email";
        inputField.setAttribute("aria-invalid", "true");
        inputField.setAttribute("aria-describedBy", "error");
    } else if (!emailInput.match(emailRegex)) {
        errorMessage.style.display = "block";
        inputField.classList.add("error-border");
        errorMessage.innerHTML = "Please provide a valid email";
        inputField.setAttribute("aria-invalid", "true");
        inputField.setAttribute("aria-describedBy", "error");
    } else {
        errorMessage.style.display = "none";
        inputField.classList.remove("error-border");
        inputField.removeAttribute("aria-invalid");
        inputField.removeAttribute("aria-describedBy");
        inputField.value = "";
    }
    e.preventDefault();
});