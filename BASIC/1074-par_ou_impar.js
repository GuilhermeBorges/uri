/*
URI Online Judge | 1074
Par ou Ímpar
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.

Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.

Exemplo de Entrada	Exemplo de Saída
4
-5
0
3
-4

ODD NEGATIVE
NULL
ODD POSITIVE
EVEN NEGATIVE
*/

// var input = require('fs').readFileSync('/dev/stdin', 'utf8')
// var lines = input.split('\n')

var lines = `4
-5
0
3
-4`.split('\n')

function isNegative(valor) {
  return valor < 0
}

function isEven(valor) {
  return valor % 2 === 0
}

function isNull(valor) {
  return valor === 0
}

function toPrint(valor) {
  if(isNull(valor)) return 'NULL'
  else {
    const positiveness = isNegative(valor) ? 'NEGATIVE' : 'POSITIVE'
    const parity = isEven(valor) ? 'EVEN' : 'ODD'
    return `${parity} ${positiveness}`
  }
}

(function main(lines) {
  let entrada = lines.map(Number)
  let qtd = entrada.shift()
  entrada = entrada.splice(0, qtd)
  
  entrada
  .map(toPrint)
  .forEach(string => console.log(string))
})(lines)
  
