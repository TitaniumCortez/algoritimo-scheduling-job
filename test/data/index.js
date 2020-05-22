const teste_vivo = [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 12:00:00",
        "estimatedTime": "2 horas"
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

const agendamentoEmUmDia = [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 12:00:00",
        "estimatedTime": "1 horas"
    },
    {
        "id": 2,
        "description": "Importação de dados da Base Legada",
        "maxDate": " 2019-11-11 12:00:00",
        "estimatedTime": "1 horas",
    },
    {
        "id": 3,
        "description": "Importação de dados de integração",
        "maxDate": "2019-11-11 08:00:00",
        "estimatedTime": "1 horas",
    }
]

const agendamentoDe4Jobs = [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 12:00:00",
        "estimatedTime": "2 horas"
    },
    {
        "id": 2,
        "description": "Importação de dados da Base Legada",
        "maxDate": " 2019-11-11 12:00:00",
        "estimatedTime": "3 horas",
    },
    {
        "id": 3,
        "description": "Importação de dados de integração",
        "maxDate": "2019-11-11 08:00:00",
        "estimatedTime": "3 horas",
    },
    {
        "id": 4,
        "description": "Importação de dados de siebel",
        "maxDate": "2019-11-11 08:00:00",
        "estimatedTime": "8 horas",
    }
]

const agendamento2jobs8horasCada = [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 17:00:00",
        "estimatedTime": "8 horas"
    },
    {
        "id": 2,
        "description": "Importação de dados da Base Legada",
        "maxDate": " 2019-11-11 12:00:00",
        "estimatedTime": "8 horas",
    }
]

const tentativaDeAgendamentoForaDaJanela = [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 17:00:00",
        "estimatedTime": "8 horas"
    },
    {
        "id": 2,
        "description": "Importação de dados da Base Legada",
        "maxDate": " 2019-11-11 17:00:00",
        "estimatedTime": "8 horas",
    }
]

module.exports = {
    teste_vivo,
    agendamentoEmUmDia,
    agendamento2jobs8horasCada,
    agendamentoDe4Jobs,
    tentativaDeAgendamentoForaDaJanela
}