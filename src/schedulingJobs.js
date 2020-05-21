const moment = require('moment');
const data = require('./data');
const Props = require('./config');


const hora_inicio_janela = moment(Props.dataInicio).hours();
const hora_fim_janela = moment(Props.dataFim).hours();
const diferenca_de_dias = dayDiff(Props);
const dias = new Array(diferenca_de_dias);
const agenda = [];


for (let i = 0; i < dias.length; i++) {
    //Inicializa os dias
    dias[i] = new Array(24);
    //Inicializa agenda
    agenda.push({ hours: 0, data: new Array() });
}

//adiciona demilitador no periodo da janela
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

//ordena para os primeiros horarios a serem agendados
data.sort((a, b) => moment(a.maxDate) - moment(b.maxDate))


console.table(dias);
console.log(data);

//Verefica se a data informada esta dentro do periodo da janela
const dentroPeriodoJanela = (element) => {
    return moment(element.maxDate).isBetween(Props.dataInicio, Props.dataFim)
        || moment(element.maxDate).isSame(Props.dataFim)
        || moment(element.maxDate).isSame(Props.dataInicio);
}

// Retorna a diferenca da data em dias
function dayDiff({ dataInicio, dataFim }) {
    return moment(dataFim).diff(dataInicio, 'days') + 1;
}

// Agendamento de job
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const hora_estimada_job = Number(element.estimatedTime.charAt(0));
    //const maximo_time_execucao
    let agendado = false;

    //Finaliza o loop quando ocorre o agendamento
    if (agendado || !dentroPeriodoJanela(element))
        break;

    for (let index = 0; index < dias.length; index++) {
        //recupera da agenda os horarios agendados
        let horas_agendada = agenda[index].hours;
        let dia = dias[index];

        //Finaliza o loop quando ocorre o agendamento
        if (agendado)
            break;

        for (let hora = 0; hora < dia.length; hora++) {
            //Analisa disponibilidade de agenda
            if (dia[hora] == 0 && (horas_agendada + hora_estimada_job) <= Props.periodoExecucao) {
                horas_agendada += hora_estimada_job;

                //Agenda o job com valor 1
                dia.fill(1, hora, hora + hora_estimada_job);

                //adiciona na agenda as horas 
                const result = agenda[index];
                result.hours = horas_agendada;
                result.data.push(element.id);

                agendado = true;

                break;
            }
        }
    }
}

const result = agenda.map((item) => { return item.data });
console.log(result);
// [ [1, 3] , [2] ] 