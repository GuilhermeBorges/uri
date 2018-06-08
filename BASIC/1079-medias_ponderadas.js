/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1079
URI Online Judge | 1079
Médias Ponderadas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0

5.7
6.3
9.3
*/

var lines = `3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0`.split('\n')

function calcMedia(n1, n2, n3) {
  return ((n1*2 + n2*3 + n3*5)/10).toFixed(1)
}

function formatEntrada(lines) {
  let entrada = lines
  let qtd = entrada.shift()
  let linhas = entrada.splice(0, qtd)
  return linhas.map(e => e.split(' ').map(Number))
}


;(function main (lines) {
  const entrada = formatEntrada(lines)
  entrada
    .map(teste => calcMedia(...teste))
    .forEach(resultado => console.log(resultado))
}) (lines)