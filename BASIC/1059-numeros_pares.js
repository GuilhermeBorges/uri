/*
URI Online Judge | 1059
Números Pares
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.

Exemplo de Entrada	Exemplo de Saída
2
4
6
...
100
*/


Array.from({length:100}, (v,k) => k+1).forEach(a=>a%2==0 ? console.log(a): '')