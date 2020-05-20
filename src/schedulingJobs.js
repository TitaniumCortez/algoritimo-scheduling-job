const moment = require('moment');

const janela_de_execucao = {
    dataInicio: '2019-11-10 09:00:00',
    dataFim: '2019-11-11 12:00:00',
    periodoExecucao: 8
};

const data = [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 12:00:00",
        "estimatedTime": "2 horas,"
    },
    {
        "id": 2,
        "description": "Importação de dados da Base Legada",
        "maxDate": " 2019-11-11 12:00:00",
        "estimatedTime": "4 horas",
    },
    {
        "id": 3,
        "description": "Importação de dados de integração",
        "maxDate": "2019-11-11 08:00:00",
        "estimatedTime": "6 horas",
    }
]
const hora_inicio_janela = moment(janela_de_execucao.dataInicio).hours();
const hora_fim_janela = moment(janela_de_execucao.dataFim).hours();
const diferenca_de_dias = dayDiff(janela_de_execucao);
const dias = new Array(diferenca_de_dias);
const agenda = new Map();

for (let i = 0; i < dias.length; i++) {
    //Inicializa os dias
    dias[i] = new Array(24);
    //Inicializa agenda
    agenda.set(i, new Array());
}

dias[0][hora_inicio_janela] = '-';
dias[dias.length - 1][hora_fim_janela] = '-';


let count = 0;
//Inicializa as horas disponiveis da janela
dias.forEach((dia, index) => {
    for (let hora = 0; hora < dia.length; hora++) {

        if (count >= 2)
            break;

        if (dia[hora] === '-')
            count++;

        if (count != 0)
            dia[hora] = 0;

    }
})



console.table(dias);

// Agendamento de job
data.forEach((element) => {
    const hora_estimada_job = element.estimatedTime.charAt(0);

    //Verifica se data para agendamento esta entre o horario da janela
    // if (!dentroPeriodoJanela(element))

    for (let dia of dias) {

        dia[9] = '-';

    }

})


dias.forEach((element, index) => {
    console.log(element);
});

console.log(dias);

function dentroPeriodoJanela(element) {
    return moment(element.maxDate).isBetween(janela_de_execucao.dataInicio, janela_de_execucao.dataFim)
        || moment(element.maxDate).isSame(janela_de_execucao.dataFim)
        || moment(element.maxDate).isSame(janela_de_execucao.dataInicio);
}

function dayDiff({ dataInicio, dataFim }) {
    return moment(dataFim).diff(dataInicio, 'days') + 1;
}

// [1, 3] , [2]