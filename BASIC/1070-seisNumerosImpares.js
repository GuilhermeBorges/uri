/*
URI Online Judge | 1070
Seis Números Ímpares
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.

Exemplo de Entrada	Exemplo de Saída
8

9
11
13
15
17
19
*/
var lines =
  `10`.split('\n')


let entrada = lines
  .filter(a => a !== '')
  .map(Number)[0]

Array.from({ length: entrada + 12 }, (v, k) => k + 1)
  .forEach(a => a % 2 === 1 && a > entrada ? console.log(a) : '')
