`
https://www.urionlinejudge.com.br/judge/pt/problems/view/1043
URI Online Judge | 1043
Triângulo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.

Exemplo de Entrada	Exemplo de Saída
6.0 4.0 2.0

Area = 10.0

6.0 4.0 2.1

Perimetro = 12.1
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// var lines = 
// `6.0 4.0 2.0
// `.split('\n')

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

function checkTriangulo (a,b,c) {
  return (
    Math.abs(b-c) < a && a < c+b
    && Math.abs(a-c) < b && b < a+c
    && Math.abs(a-b) < c && c < a+b
  )
}

function perimetroTriangulo(a,b,c) {
  return toFixed(a+b+c,1)
}

function areaTrapezio (a,b,c) {
  return toFixed((a+b)*c/2,1)
}

function toFixed(num, fixed) {
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return Number(num.toString().match(re)[0]).toFixed(fixed);
}

;(function () {
  checkTriangulo(...entrada)
    ? console.log(`Perimetro = ${perimetroTriangulo(...entrada)}`)
    : console.log(`Area = ${areaTrapezio(...entrada)}`)
})()
