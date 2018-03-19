`
https://www.urionlinejudge.com.br/judge/pt/problems/view/1042
URI Online Judge | 1042
Sort Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.

Exemplo de Entrada	Exemplo de Saída
7 21 -14

-14
7
21

7
21
-14

-14 21 7

-14
7
21

-14
21
7
`


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// var lines = 
// `7 21 -14
// `.split('\n')

/**
 * Escreva a sua solução aqui
 * Code your solution here²
 * Escriba su solución aquí
 */

function toNumber(entry) {
  return (entry instanceof Array)
    ? entry.map(Number)
    : Number(entry)
}

function formatEntry(entry) {
  return lines
    .map(l => l.split(' '))
    .map(toNumber)
}

entrada = formatEntry(lines)[0]
let ordenado = entrada.map(a=>a)

ordenado.sort((a,b)=> a>b).forEach(elemento => console.log(elemento))
console.log()
entrada.forEach(elemento => console.log(elemento))
