/*URI Online Judge | 1046
Tempo de Jogo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia a hora inicial e a hora final de um jogo.A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

  Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

  Saída
Apresente a duração do jogo conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
16 2

O JOGO DUROU 10 HORA(S)

0 0

O JOGO DUROU 24 HORA(S)

2 16

O JOGO DUROU 14 HORA(S)
*/


var lines = 
`22 4
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
function quantidadeDeHoras(inicio, fim) {
  if(fim == inicio) return 24
  if (fim > inicio) return fim - inicio
  else return (24 - inicio) + fim
 }

(function main () {
  console.log(`O JOGO DUROU ${quantidadeDeHoras(...entrada)} HORA(S)`)
}())