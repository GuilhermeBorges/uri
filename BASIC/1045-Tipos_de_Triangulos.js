/*
URI Online Judge | 1045
Tipos de Triângulos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.

Exemplos de Entrada	Exemplos de Saída
7.0 5.0 7.0

TRIANGULO ACUTANGULO
TRIANGULO ISOSCELES

6.0 6.0 10.0

TRIANGULO OBTUSANGULO
TRIANGULO ISOSCELES

6.0 6.0 6.0

TRIANGULO ACUTANGULO
TRIANGULO EQUILATERO

5.0 7.0 2.0

NAO FORMA TRIANGULO

6.0 8.0 10.0

TRIANGULO RETANGULO
*/

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

let entrada = formatEntry(lines)[0]

let sorted = entrada.sort((a,b) => a < b)

function tipoTriangulo (A, B, C) {
    if (A >= B+C) console.log(`NAO FORMA TRIANGULO`)
    else
    {
        if (A*A == B*B + C*C) console.log(`TRIANGULO RETANGULO`)
        if (A*A > B*B + C*C) console.log(`TRIANGULO OBTUSANGULO`)
        if (A*A < B*B + C*C) console.log(`TRIANGULO ACUTANGULO`)
        if (A == B && B == C && C == A) console.log(`TRIANGULO EQUILATERO`)
        else if (A == B || B == C || C == A) console.log(`TRIANGULO ISOSCELES`)
    }
}


tipoTriangulo(...sorted)
