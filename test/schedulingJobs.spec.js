const scheduling = require('../src/schedulingJobs');
const { teste_vivo, agendamentoEmUmDia, agendamentoDe4Jobs, agendamento2jobs8horasCada, tentativaDeAgendamentoForaDaJanela } = require('./data');
const props = {
    dataInicio: '2019-11-10 09:00:00',
    dataFim: '2019-11-11 12:00:00',
    periodoExecucao: 8
};


describe("SchedulingJob Test", () => {
    it("Deve retorna o agendamento no formato → [[1,3],[2]]", () => {
        expect(scheduling({ props, data: teste_vivo })).toEqual([[1, 3], [2]]);
    });

    it("5 jobs agendados retorno  →  [[1, 3, 2], [4]]", () => {
        expect(scheduling({ props, data: agendamentoDe4Jobs })).toEqual([[1, 3, 2], [4]]);
    });

    it("Todos agendamento executados no mesmo dia e outro dia livre → [[1,3,2],[]]", () => {
        expect(scheduling({ props, data: agendamentoEmUmDia })).toEqual([[1, 3, 2], []]);
    });

    it("agendamento 2 jobs de 8 horas → [[1], [2]]", () => {
        expect(scheduling({ props, data: agendamento2jobs8horasCada })).toEqual([[1], [2]]);
    });

    it("tentativa de agendamento fora da janela → [[1],[]]", () => {
        expect(scheduling({ props, data: tentativaDeAgendamentoForaDaJanela })).toEqual([[1], []]);
    });

});
