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

const horas = new Array(24).fill(0);
const diferenca_de_dias = dayDiff(janela_de_execucao);
// Adicionando os horas aos dias
const dias = new Array(diferenca_de_dias).fill(horas);
const agenda = new Map();

//Inicializa a agenda
dias.forEach((element, index) => {
    agenda.set(index, new Array());
});

// Agendamento de job
data.forEach((element) => {

    const hourEstimated = element.estimatedTime.charAt(0);
    console.log(hourEstimated);
})

function dayDiff({ dataInicio, dataFim }) {
    return moment(dataFim).diff(dataInicio, 'days') + 1;
}

// [1, 3] , [2]