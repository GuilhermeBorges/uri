/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1097
URI Online Judge | 1097
Sequencia IJ 3
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=9
I=3 J=8
I=3 J=7
...
I=9 J=15
I=9 J=14
I=9 J=13
*/


function getSequencia(inicio = 1, salto = 2, fim = 9, jArray = [7, 6, 5]) {
  let array = []
  for (index = inicio; index <= fim; index += salto) {
    jArray.forEach(jVal => array.push({
      i: index,
      j: jVal
    }))
    jArray = jArray.map(e => e + 2)
  }
  return array
}

; (function main() {
  getSequencia().forEach(elemento =>
    console.log(`I=${elemento.i} J=${elemento.j}`))
})()