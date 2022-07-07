const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const firstNameError = document.querySelector('#errorFirstName');
const lastNameError = document.querySelector('#errorLasrName');
const emailError = document.querySelector('#errorEmail');
const passError = document.querySelector('#errorPass');

const button = document.querySelector('form');

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name');
    validateEmail(email.value, email, emailError)
    validateEmpty(password.value, password, passError, 'Password');
});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regExp.test(valueInput) == true) {
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'Looks like this is not an email');
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
    divError.style.display = "block";
    divInput.classList.add("form__input-error");
    divError.innerHTML = error;
}

function hideError(divInput, divError) {
    divError.style.display = "none";
    divInput.classList.remove("form__input-error");
    divError.innerHTML = "";
}
