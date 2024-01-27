const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const btnEnviar = document.querySelector('#submit');
const data = new Date();
const resultDays = document.querySelector('#resultDays');
const resultMonths = document.querySelector('#resultMonths');
const resultYears = document.querySelector('#resultYears');

btnEnviar.addEventListener('click', function () {
    document.getElementById('error__day').textContent = '';
    document.getElementById('error__month').textContent = '';
    document.getElementById('error__year').textContent = '';
    exibeErro('Campo obrigatório');
    validarData();
});

function exibeErro(mensagem) {
    if (!dayInput.value) {
        document.getElementById('error__day').textContent = mensagem;
    }
    if (!monthInput.value) {
        document.getElementById('error__month').textContent = mensagem;
    }
    if (!yearInput.value) {
        document.getElementById('error__year').textContent = mensagem;
    }
}

function validarData() {
    const mensagem = 'Valor inválido';

    if (monthInput.value < 1 || monthInput.value > 12) {
        document.getElementById('error__month').textContent = mensagem;
    }

    if ((monthInput.value == 1 || monthInput.value == 3 || monthInput.value == 5 || monthInput.value == 7 || monthInput.value == 8 || monthInput.value == 10 || monthInput.value == 12) && (dayInput.value < 1 || dayInput.value > 31)) {
        document.getElementById('error__day').textContent = mensagem;
    }

    if ((monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 9 || monthInput.value == 11) && (dayInput.value < 1 || dayInput.value > 30)) {
        document.getElementById('error__day').textContent = mensagem;
    }
    if (monthInput.value == 2) {
        if ((yearInput.value % 4 == 0 && yearInput.value % 100 != 0) || yearInput.value % 400 == 0) {
            if (dayInput.value < 1 || dayInput.value > 29) {
                document.getElementById('error__day').textContent = mensagem;
            }
        } else {
            if (dayInput.value < 1 || dayInput.value > 28) {
                document.getElementById('error__day').textContent = mensagem;
            }
        }
    }
    if (yearInput.value < 0 || yearInput.value > data.getFullYear()) {
        document.getElementById('error__year').textContent = mensagem;
    } else {
        calculo();
    }
}

function calculo() {
    let diaUser = parseInt(dayInput.value);
    let mesUser = parseInt(monthInput.value);
    let anoUser = parseInt(yearInput.value);

    let difDia = data.getDate() - diaUser;
    let difMes = data.getMonth() + 1 - mesUser;
    let difAno = data.getFullYear() - anoUser;

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