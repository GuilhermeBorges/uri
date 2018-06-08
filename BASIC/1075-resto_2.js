/*
URI Online Judge | 1075
Resto 2
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

Exemplo de Entrada	Exemplo de Saída
13

2
15
28
41
...
*/


var lines = `11`.split('\n')

function mod (valor, mod) {
  return valor % mod === 2
}


;(function main (lines) {
  const entrada = lines.map(Number)[0]
  for (let index = 1; index <= 10000; index++) {
    if(mod(index, entrada)) console.log(index)
  }
}) (lines)