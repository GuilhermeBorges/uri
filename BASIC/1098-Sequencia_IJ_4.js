/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1098
URI Online Judge | 1098
Sequencia IJ 4
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=?
*/


function getSequencia(inicio = 0, salto = 0.2, fim = 2, jArray = [1, 2, 3]) {
  let array = []
  for (index = inicio; index <= fim; index += salto) {
    jArray.forEach(jVal => array.push({
      i: prettyPrint(index),
      j: prettyPrint(jVal)
    }))
    jArray = jArray.map(e => e + 0.2)
  }
  return array
}

function prettyPrint(value) {
  return value.toFixed(1) % 1 > 0 ? value.toFixed(1) : value.toFixed(0)
}

;(function main() {
  getSequencia().forEach(elemento =>
    console.log(`I=${elemento.i} J=${String(elemento.j)}`))
})()