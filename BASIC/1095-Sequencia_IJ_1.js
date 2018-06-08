/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1095
URI Online Judge | 1095
Sequencia IJ 1
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo

Exemplo de Entrada	Exemplo de Saída
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0
*/

function getSequencia(incrementar = 3, reduzir = 5, inicioIncrementar = 1, inicioReduzir = 60) {
  let array = []
  while (inicioReduzir >= 0) {
    let obj = {
      i: inicioIncrementar,
      j: inicioReduzir
    }
    inicioIncrementar += incrementar
    inicioReduzir -= reduzir
    array.push(obj)
  }
  return array
}

; (function main() {
  getSequencia().forEach(elemento => 
    console.log(`I=${elemento.i} J=${elemento.j}`))
})()