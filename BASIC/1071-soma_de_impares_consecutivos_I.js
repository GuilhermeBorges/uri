/*
URI Online Judge | 1071
Soma de Impares Consecutivos I
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.

Exemplo de Entrada	Exemplo de Saída
6
-5

5

15
12

13

12
12

0
*/


var lines = `6
-5`.split('\n')

function isOdd(value) {
  return value % 2 === 1 || value % 2 === -1
}

function getOddsBetween(n1, n2) {
  let array = []
  if (n1 < n2) {
    for (let index = n1 + 1 ; index < n2; index++) {
      if(isOdd(index)) array.push(index)
    }
  }
  else {
    for (let index = n2 + 1; index < n1; index++) {
      if (isOdd(index)) array.push(index)
    }
  }
  return array
}

function sum(a, b) {return a+b}

;(function main(lines) {
  const n1 = lines.map(Number)[0]
  const n2 = lines.map(Number)[1]
  console.log(
    getOddsBetween(n1, n2)
      .reduce(sum, 0)
  )

})(lines)