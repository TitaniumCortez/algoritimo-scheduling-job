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
    agenda.set(i, { hours: 0, data: new Array() });
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

//ordenacao de prioridade de agendamento por date e horario


console.table(dias);

// Agendamento de job
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const hora_estimada_job = Number(element.estimatedTime.charAt(0));
    const maximo_time_execucao
    let agendado = false;


    if (agendado)
        break;

    for (let index = 0; index < dias.length; index++) {
        let horas_agendada = agenda.get(index).hours;
        let dia = dias[index];

        if (agendado)
            break;

        for (let hora = 0; hora < dia.length; hora++) {
            //Analisa disponibilidade de agenda
            if (dia[hora] == 0 && (horas_agendada + hora_estimada_job) <= janela_de_execucao.periodoExecucao
                &&             ) {
                horas_agendada += hora_estimada_job;

                //Agenda o job com valor 1
                dia.fill(1, hora, hora + hora_estimada_job);

                const result = agenda.get(index);
                result.hours = horas_agendada;
                result.data.push(element.id);

                agendado = true;

                break;
            }
        }
    }
}

console.log(agenda.get(0));
console.log(agenda.get(1));


console.table(dias);

function dentroPeriodoJanela(element) {
    return moment(element.maxDate).isBetween(janela_de_execucao.dataInicio, janela_de_execucao.dataFim)
        || moment(element.maxDate).isSame(janela_de_execucao.dataFim)
        || moment(element.maxDate).isSame(janela_de_execucao.dataInicio);
}

function dayDiff({ dataInicio, dataFim }) {
    return moment(dataFim).diff(dataInicio, 'days') + 1;
}

const sortDate = () => {
    
}

// [1, 3] , [2]