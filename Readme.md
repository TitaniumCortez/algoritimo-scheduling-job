# Algoritmo Scheduling Jobs

Algoritmo para agendar jobs a serem executados respeitando os criteiros da janela em aberto.

### Tecnologia

  - Nodejs

### Dependencias 

  - Moment
  - Jest

#### `Moment:` Utilizado para formatação de Datas
#### `Jest:` Framework para auxiliar nos teste unitários.


##  Instalação Depedencias

```
npm install 
```


# Executando o código(massa default)

```
  npm run start
```

- Executando os teste


```
  npm run test
```


## Lógica

Criar uma matriz multimencional sendo [dias][horas] representando o periodo da janela em aberto.

As horas são marcadas como o valor `0` para as horas disponiveis para agendamentos.

<img src="docs/tableValue0.png" title="Tabela com horas e valores a 0" alt="table values">


Quando ocorre o agendamento as horas utilizadas são marcados com o valor `1`.

<img src="docs/tableValue1.png" title="Tabela com horas e valores a 0" alt="table values">

# Premissas

Para ocorrer um agendamento temos algumas premissas sendo:
  - Máximo 8 horas por dia
  - Deve respeitar a Data e horario

