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

function exibeErro(mensagem, dayInput, monthInput, yearInput) {
    if (!dayInput) {
        document.getElementById('error__day').textContent = mensagem;
    } else {
        document.getElementById('error__day').textContent = '';
    }
    if (!monthInput) {
        document.getElementById('error__month').textContent = mensagem;
    } else {
        document.getElementById('error__month').textContent = '';
    }
    if (!yearInput) {
        document.getElementById('error__year').textContent = mensagem;
    } else {
        document.getElementById('error__year').textContent = '';
    }
    if (dayInput && monthInput && yearInput) {
        validarData(dayInput, monthInput, yearInput);
    }
}

function validarData(dayInput, monthInput, yearInput) {
    let mensagem = 'Must be a valid date';

    if (monthInput < 1 || monthInput > 12) {
        mensagem = 'Must be a valid month';
        document.getElementById('error__month').textContent = mensagem;
    }
    else if ((monthInput == 1 || monthInput == 3 || monthInput == 5 || monthInput == 7 || monthInput == 8 || monthInput == 10 || monthInput == 12) && (dayInput < 1 || dayInput > 31)) {
        mensagem = 'Must be a valid day';
        document.getElementById('error__day').textContent = mensagem;
    }
    else if ((monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11) && (dayInput < 1 || dayInput > 31)) {
        if (dayInput === 31) {
            document.getElementById('error__day').textContent = mensagem;
        } else {
            mensagem = 'Must be a valid day';
            document.getElementById('error__day').textContent = mensagem;
        }
    }
    else if (monthInput == 2) {
        if ((yearInput % 4 == 0 && yearInput % 100 != 0) || yearInput % 400 == 0) {
            if (dayInput < 1 || dayInput > 31) {
                document.getElementById('error__day').textContent = mensagem;
            } else if (dayInput > 29) {
                mensagem = 'Must be a valid day';
                document.getElementById('error__day').textContent = mensagem;
            }
        } else {
            if (dayInput < 1 || dayInput > 31) {
                document.getElementById('error__day').textContent = mensagem;
            } else if (dayInput > 28) {
                mensagem = 'Must be a valid day';
                document.getElementById('error__day').textContent = mensagem;
            }
        }
    }
    else if (yearInput < 0) {
        mensagem = 'Must be a valid year';
        document.getElementById('error__year').textContent = mensagem;
    }
    else if (yearInput > data.getFullYear()) {
        mensagem = 'Must be in the past';
        document.getElementById('error__year').textContent = mensagem;
    }
    else {
        calculo(dayInput, monthInput, yearInput);
    }
}

function calculo(dayInput, monthInput, yearInput) {
    let difDia = data.getDate() - dayInput;
    let difMes = data.getMonth() + 1 - monthInput;
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

    const resultado = {
        dia: difDia < 10 ? '0' + difDia : difDia,
        mes: difMes < 10 ? '0' + difMes : difMes,
        ano: difAno
    };

    resultDays.textContent = resultado.dia;
    resultMonths.textContent = resultado.mes;
    resultYears.textContent = resultado.ano;
}