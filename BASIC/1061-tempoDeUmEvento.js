/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1061
URI Online Judge | 1061
Tempo de um Evento
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo em segundos que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento..

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

Entrada
Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

Saída
Na saída, deve ser apresentada a duração do evento, no seguinte formato:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.

Exemplo de Entrada	Exemplo de Saída
Dia 5
08 : 12 : 23
Dia 9
06 : 13 : 23

3 dia(s)
22 hora(s)
1 minuto(s)
0 segundo(s)
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// var lines = `Dia 5
// 08 : 12 : 23
// Dia 9
// 06 : 13 : 23`.split(`\n`)


let startDate = Number(lines[0].slice(-2))
let startTime = lines[1].replace(/\s/g, "")
let endDate = Number(lines[2].slice(-2))
let endTime = lines[3].replace(/\s/g, "")
let start = new Date(`04-${startDate}-2018 :${startTime}`)
let end = new Date(`04-${endDate}-2018 :${endTime}`)

function diffTime(start, end) {
  return {
    days: getDaysBetween(start, end),
    hours: getHoursBetween(start, end) - getDaysBetween(start, end) * 24,
    minutes: getMinutesBetween(start, end) - getHoursBetween(start, end) * 60,
    seconds: getSecondsBetween(start, end) - getMinutesBetween(start, end) * 60,
  }
}

function getDaysBetween(start, end) {
  return Math.floor((end - start) / (60 * 60 * 24 * 1000))
}

function getHoursBetween(start, end) {
  return Math.floor((end - start) / (60 * 60 * 1000))
}

function getMinutesBetween(start, end) {
  return Math.floor((end - start) / (60 * 1000))
}

function getSecondsBetween(start, end) {
  return Math.floor((end - start) / (1000))
}

function print (obj) {
  console.log(`${obj.days} dia(s)\n${obj.hours} hora(s)\n${obj.minutes} minuto(s)\n${obj.seconds} segundo(s)`)
}

print(diffTime(start, end))