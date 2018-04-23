/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1060
URI Online Judge | 1060
Números Positivos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.

Exemplo de Entrada	Exemplo de Saída
7
-5
6
-3.4
4.6
12

4 valores positivos
*/


var lines =
  `7
-5
6
-3.4
4.6
12`.split('\n')


lines =
  `-1
-50
-77
-99
0
1`.split('\n')


let qtdPositivos = lines
  .map(Number)
  .filter(x => x >= 0)
  .length

console.log(`${qtdPositivos} valores positivos`)
