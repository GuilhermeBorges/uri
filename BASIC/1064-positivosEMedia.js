/*
URI Online Judge | 1064
Positivos e Média
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.

Exemplo de Entrada	Exemplo de Saída
7
-5
6
-3.4
4.6
12

4 valores positivos
7.4
*/

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
var lines =
  `0.1
0.1
0.1
0.1
0.1
0.1`.split('\n')


// /**
//  * Decimal adjustment of a number.
//  *
//  * @param	{String}	type	The type of adjustment.
//  * @param	{Number}	value	The number.
//  * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
//  * @returns	{Number}			The adjusted value.
//  */
// function decimalAdjust(type, value, exp) {
//   // If the exp is undefined or zero...
//   if (typeof exp === 'undefined' || +exp === 0) {
//     return Math[type](value);
//   }
//   value = +value;
//   exp = +exp;
//   // If the value is not a number or the exp is not an integer...
//   if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
//     return NaN;
//   }
//   // Shift
//   value = value.toString().split('e');
//   value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
//   // Shift back
//   value = value.toString().split('e');
//   return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
// }

// // Decimal round
// if (!Math.round10) {
//   Math.round10 = function (value, exp) {
//     return decimalAdjust('round', value, exp);
//   };
// }
// // Decimal floor
// if (!Math.floor10) {
//   Math.floor10 = function (value, exp) {
//     return decimalAdjust('floor', value, exp);
//   };
// }
// // Decimal ceil
// if (!Math.ceil10) {
//   Math.ceil10 = function (value, exp) {
//     return decimalAdjust('ceil', value, exp);
//   };
// }


// function average(array) {
//   return Math.ceil10(array.reduce((c, a, i, v) => {
//     return c + a / v.length
//   }, 0), -1)
// }

function average(array) {
  return (array.reduce((c, a, i, v) => {
    return c + a / v.length 
  }, 0)).toFixed(1)
}

let positivos = lines
  .filter(a => a !== '')
  .map(Number)
  .filter(x => x >= 0)

let qtdPositivos = positivos.length
let mediaPositivos = average(positivos)

console.log(`${qtdPositivos} valores positivos`)
console.log(`${mediaPositivos}`)

