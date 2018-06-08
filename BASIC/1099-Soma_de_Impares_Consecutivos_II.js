/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1099
URI Online Judge | 1099
Soma de Ímpares Consecutivos II
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma de todos valores ímpares entre X e Y.

Exemplo de Entrada	Exemplo de Saída
7

4 5

13 10

6 4

3 3

3 5

3 4

3 8

0

11

5

0

0

0

12
*/

var lines = `7
4 5
13 10
6 4
3 3
3 5
3 4
3 8`.split('\n')

function isOdd(value) {
  return value % 2 === 1 || value % 2 === -1
}

function getOddsBetween(n1, n2) {
  let array = []
  if (n1 < n2) {
    for (let index = n1 + 1; index < n2; index++) {
      if (isOdd(index)) array.push(index)
    }
  }
  else {
    for (let index = n2 + 1; index < n1; index++) {
      if (isOdd(index)) array.push(index)
    }
  }
  return array
}

function sum(a, b) { return a + b }

function formatEntry(lines) {
  let entrada = lines
  let qtd = entrada.shift()
  linhas = entrada.splice(0, qtd)
  return linhas.map(l => l.split(' ').map(Number))
}

; (function main(lines) {
  const entrada = formatEntry(lines)
  entrada
    .map( e => 
    getOddsBetween(...e)
      .reduce(sum, 0)
    )
    .forEach(resposta => console.log(resposta))
})(lines)