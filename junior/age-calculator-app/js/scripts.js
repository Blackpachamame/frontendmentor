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
    resultDays.textContent = '--';
    resultMonths.textContent = '--';
    resultYears.textContent = '--';
    exibeErro('This field is required', dayInput, monthInput, yearInput);
});

function exibeErro(message, dayInput, monthInput, yearInput) {
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
    if (dayInput && monthInput && yearInput) {
        validarData(dayInput, monthInput, yearInput);
    }
}

function validarData(dayInput, monthInput, yearInput) {
    let message = 'Must be a valid date';
    // Valida si el mes se sale del rango
    if (monthInput < 1 || monthInput > 12) {
        message = 'Must be a valid month';
        document.getElementById('error__month').textContent = message;
    }
    // Valida si los días de los meses con 31 días se salen de rango
    else if ((monthInput == 1 || monthInput == 3 || monthInput == 5 || monthInput == 7 || monthInput == 8 || monthInput == 10 || monthInput == 12) && (dayInput < 1 || dayInput > 31)) {
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
        if (dayInput < 1 || dayInput > 31) {
            message = 'Must be a valid day';
            document.getElementById('error__day').textContent = message;
        } else {
            if ((yearInput % 4 == 0 && yearInput % 100 != 0) || yearInput % 400 == 0) {
                if (dayInput > 29) {
                    document.getElementById('error__day').textContent = message;
                } else {
                    calculo(dayInput, monthInput, yearInput); // Si todo es correcto, entonces calcula la edad
                }
            } else {
                if (dayInput > 28) {
                    document.getElementById('error__day').textContent = message;
                } else {
                    calculo(dayInput, monthInput, yearInput); // Si todo es correcto, entonces calcula la edad
                }
            }
        }
    }
    // Valida si los años son negativos
    else if (yearInput < 0) {
        message = 'Must be a valid year';
        document.getElementById('error__year').textContent = message;
    }
    // Valida si los años se exceden del año actual
    else if (yearInput > data.getFullYear()) {
        message = 'Must be in the past';
        document.getElementById('error__year').textContent = message;
    }
    // Si todo es correcto, entonces calcula la edad
    else {
        calculo(dayInput, monthInput, yearInput);
    }
}

function calculo(dayInput, monthInput, yearInput) {
    console.log(data.getDate());
    console.log(data.getMonth());
    console.log(data.getFullYear());
    let difDia = data.getDate() - dayInput;
    let difMes = data.getMonth() + 1 - monthInput; // Suma 1 porque empieza contando del mes 0
    let difAno = data.getFullYear() - yearInput;
    console.log(difDia);
    console.log(difMes);
    console.log(difAno);

    // Verifica si un día o mes de nacimento es posterior al día o mes actuales
    if (difDia < 0) {
        const ultimoDiaMesAnterior = new Date(data.getFullYear(), data.getMonth(), 0).getDate();
        console.log(ultimoDiaMesAnterior);
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