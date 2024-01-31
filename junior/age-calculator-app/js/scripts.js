const data = new Date();
const resultDays = document.getElementById('resultDays');
const resultMonths = document.getElementById('resultMonths');
const resultYears = document.getElementById('resultYears');
let formulario = document.getElementById('form');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let dayInput = document.getElementById('day').value;
    let monthInput = document.getElementById('month').value;
    let yearInput = document.getElementById('year').value;
    resultDays.textContent = '- -';
    resultMonths.textContent = '- -';
    resultYears.textContent = '- -';
    validarDatos('This field is required', dayInput, monthInput, yearInput);
});

function validarDatos(message, dayInput, monthInput, yearInput) {
    let diaValido = false;
    let mesValido = false;
    let anioValido = false;
    // Verifica si los inputs están vacíos y muestra un mensaje de error, en caso contrario, queda vacío
    if (!dayInput) {
        document.getElementById('error__day').textContent = message;
    } else {
        document.getElementById('error__day').textContent = '';
    }
    if (!monthInput) {
        document.getElementById('error__month').textContent = message;
    } else {
        document.getElementById('error__month').textContent = '';
    }
    if (!yearInput) {
        document.getElementById('error__year').textContent = message;
    } else {
        document.getElementById('error__year').textContent = '';
    }

    if (dayInput) {
        diaValido = validarDia(diaValido, dayInput, monthInput, yearInput);
    }
    if (monthInput) {
        mesValido = validarMes(mesValido, monthInput);
    }
    if (yearInput) {
        anioValido = validarAnio(anioValido, yearInput);
    }


    if (diaValido && mesValido && anioValido) {
        calculo(dayInput, monthInput, yearInput);
    }

    const validDay = document.getElementById('error__day').textContent;
    const validMonth = document.getElementById('error__month').textContent;
    const validYear = document.getElementById('error__year').textContent;
    validarLabel(validDay, validMonth, validYear);
}

function validarDia(diaValido, dayInput, monthInput, yearInput) {
    let message = 'Must be a valid date';
    // Valida si el día se sale del rango
    if (dayInput < 1 || dayInput > 31) {
        message = 'Must be a valid day';
        document.getElementById('error__day').textContent = message;
    }
    // Valida si los días de los meses con 30 días se salen de rango
    else if ((monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11) && (dayInput < 1 || dayInput > 30)) {
        if (dayInput === 31) {
            document.getElementById('error__day').textContent = message;
        } else {
            message = 'Must be a valid day';
            document.getElementById('error__day').textContent = message;
        }
    }
    // Valida si los días del mes de febrero se salen de rango
    else if (monthInput == 2) {
        if ((yearInput % 4 == 0 && yearInput % 100 != 0) || yearInput % 400 == 0) {
            if (dayInput > 29) {
                document.getElementById('error__day').textContent = message;
            } else {
                diaValido = true;
            }
        } else {
            if (dayInput > 28) {
                document.getElementById('error__day').textContent = message;
            } else {
                diaValido = true;
            }
        }
    }
    else {
        diaValido = true;
    }
    return diaValido;
}

function validarMes(mesValido, monthInput) {
    // Valida si el mes se sale del rango
    if (monthInput < 1 || monthInput > 12) {
        message = 'Must be a valid month';
        document.getElementById('error__month').textContent = message;
    }
    else {
        mesValido = true;
    }

    return mesValido;
}


function validarAnio(anioValido, yearInput) {
    // Valida si los años son negativos
    if (yearInput < 0) {
        message = 'Must be a valid year';
        document.getElementById('error__year').textContent = message;
    }
    // Valida si los años se exceden del año actual
    else if (yearInput > data.getFullYear()) {
        message = 'Must be in the past';
        document.getElementById('error__year').textContent = message;
    } else {
        anioValido = true;
    }
    return anioValido;
}

function calculo(dayInput, monthInput, yearInput) {
    let difDia = data.getDate() - dayInput;
    let difMes = data.getMonth() + 1 - monthInput; // Suma 1 porque empieza contando del mes 0
    let difAno = data.getFullYear() - yearInput;

    // Verifica si un día o mes de nacimento es posterior al día o mes actuales
    if (difDia < 0) {
        const ultimoDiaMesAnterior = new Date(data.getFullYear(), data.getMonth(), 0).getDate();
        difDia = ultimoDiaMesAnterior + difDia;
        difMes--;
    }

    // Ajuste para meses negativos
    if (difMes < 0) {
        difMes = difMes + 12;
        difAno--;
    }

    resultDays.textContent = difDia;
    resultMonths.textContent = difMes;
    resultYears.textContent = difAno;
}

function validarLabel(dayTextError, monthLabel, yearLabel) {
    const label = document.getElementsByClassName('data__label');
    const input = document.getElementsByClassName('data__input');
    let day = (dayTextError === 'This field is required' || dayTextError === 'Must be a valid date' || dayTextError === 'Must be a valid day') ? true : false;
    let month = (monthLabel === 'This field is required' || monthLabel === 'Must be a valid date' || monthLabel === 'Must be a valid month') ? true : false;
    let year = (yearLabel === 'This field is required' || yearLabel === 'Must be a valid date' || yearLabel === 'Must be a valid year' || yearLabel === 'Must be in the past') ? true : false;

    if (day) {
        label[0].classList.add('error__label');
        input[0].classList.add('error__input');
    } else {
        label[0].classList.remove('error__label');
        input[0].classList.remove('error__input');
    }
    if (month) {
        label[1].classList.add('error__label');
        input[1].classList.add('error__input');
    } else {
        label[1].classList.remove('error__label');
        input[1].classList.remove('error__input');
    }
    if (year) {
        label[2].classList.add('error__label');
        input[2].classList.add('error__input');
    } else {
        label[2].classList.remove('error__label');
        input[2].classList.remove('error__input');
    }
}