const email = document.querySelector('#email');
const emailError = document.querySelector('#errorEmail');

const button = document.querySelector('form');

button.addEventListener('submit', (event) => {
    event.preventDefault();
    validateEmail(email.value, email, emailError);
});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regExp.test(valueInput) == true) {
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'Check your email please');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput) {
    if (valueInput.length == 0) {
        showError(divInput, divError, '' + nameInput + 'cannot be empty');
    } else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error) {
    divError.style.visibility = "visible";
    divError.style.display = "block";
    divInput.classList.add("subscribe__input-error");
    divError.innerHTML = error;
}

function hideError(divInput, divError) {
    divError.style.visibility = "hidden";
    divInput.classList.remove("subscribe__input-error");
    divError.innerHTML = "";
}