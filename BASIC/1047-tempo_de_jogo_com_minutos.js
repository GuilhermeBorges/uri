/*
URI Online Judge | 1047
Tempo de Jogo com Minutos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

Exemplo de Entrada	Exemplo de Saída
7 8 9 10

O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)

7 7 7 7

O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)

7 10 8 9

O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)
*/

var lines =
  `7 10 8 9
`.split('\n')

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

function toNumber(entry) {
  return (entry instanceof Array)
    ? entry.map(Number)
    : Number(entry)
}

function formatEntry(entry) {
  return lines
    .map(l => l.split(' '))
    .map(toNumber)
}

let entrada = formatEntry(lines)[0]
let jogo = {
  inicio: {
    horas: entrada[0],
    minutos: entrada[1]
  },
  fim: {
    horas: entrada[2],
    minutos: entrada[3]
  }
}

function tempoJogo (inicio, fim) {
  let totalJogo = {
    horas: 0,
    minutos: 0
  }
  // if(inicio.minutos + fim.minutos >= 60) totalJogo.horas += 1
  if(inicio.minutos > fim.minutos) totalJogo.horas -= 1
  totalJogo.horas += quantidadeDeHoras(inicio.horas, fim.horas)
  totalJogo.minutos += quantidadeDeMinutos(inicio.minutos, fim.minutos)
  return totalJogo
}

function quantidadeDeHoras(inicio, fim) {
  if (fim == inicio) return 24
  if (fim > inicio) return fim - inicio
  else return (24 - inicio) + fim
}

function quantidadeDeMinutos(inicio, fim) {
  if (fim == inicio) return 0
  if (fim > inicio) return fim - inicio
  else return (60 - inicio) + fim
}

(function main() {
  console.log(`O JOGO DUROU ${tempoJogo(jogo.inicio, jogo.fim).horas} HORA(S) E ${tempoJogo(jogo.inicio, jogo.fim).minutos} MINUTO(S)`)
}())