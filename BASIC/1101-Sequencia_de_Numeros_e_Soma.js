/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1101
URI Online Judge | 1101
Sequência de Números e Soma
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

Entrada
O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.

Saída
Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
5 2
6 3
5 0

2 3 4 5 Sum=14
3 4 5 6 Sum=18
*/


var lines = `5 2
6 3
5 0
-1 0
6 20`.split('\n')


function formatEntry(lines) {
  const entrada = lines
    .map(linha => linha.split(' ').map(Number))
    .reduce((prev, curr) => { 
      if(prev.control && curr[0] > 0 && curr[1] > 0) 
        prev.array.push(curr)
      else prev.control = false
      return prev
    }, {control: true, array: []})
  return entrada.array
}

function getArrayBetween(n1, n2) {
  let array = []
  const start = (n1 < n2) ? n1 : n2
  const end = (n1 < n2) ? n2 : n1
  for (let index = start ; index <= end; index++) {array.push(index)}
  return array
}

function sum (a, b) { return a + b}
;(function main(lines) {
  const entrada = formatEntry(lines)
  entrada
    .map(parametros => getArrayBetween(...parametros))
    .forEach(result => {
      console.log(`${result.join(' ')} Sum=${result.reduce(sum, 0)}`)
    })
})(lines)




