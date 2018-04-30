/*
URI Online Judge | 1065
Pares entre Cinco Números
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.

Exemplo de Entrada	Exemplo de Saída
7
-5
6
-4
12

3 valores pares
*/

let lines =
  `7
-5
6
-4
12
`.split('\n') 


let qtdPositivos = lines
  .filter(a => a !== '')  
  .map(Number)
  .filter(x => x % 2 === 0)
  .length

  console.log(`${qtdPositivos} valores pares`)


