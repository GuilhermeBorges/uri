`
https://www.urionlinejudge.com.br/judge/pt/problems/view/1041
URI Online Judge | 1041
Coordenadas de um Ponto
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores com uma casa decimal(x e y), que devem representar as coordenadas de um ponto em um plano.A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem(x = y = 0).



Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

  Entrada
A entrada contem as coordenadas de um ponto.

  Saída
A saída deve apresentar o quadrante em que o ponto se encontra.

Exemplo de Entrada	Exemplo de Saída
4.5 - 2.2

Q4

0.1 0.1

Q1

0.0 0.0

Origem
`


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// var lines = 
// `4.5 -2.2
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

function encontraQuadrante(x, y) {
  let ponto = {x,y}
    if (ponto.x == 0 && ponto.y == 0) return 'Origem'
    if (ponto.x == 0) return 'Eixo Y'
    if (ponto.y == 0) return 'Eixo X'
    if (ponto.x > 0 && ponto.y > 0) return 'Q1'
    if (ponto.x > 0 && ponto.y < 0) return 'Q4'
    if (ponto.x < 0 && ponto.y > 0) return 'Q2'
    if (ponto.x < 0 && ponto.y < 0) return 'Q3'
}

console.log(encontraQuadrante(entrada[0],entrada[1]))

