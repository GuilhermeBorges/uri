var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = Number(lines[0])
const B = Number(lines[1])
const X = A + B
console.log(`X = ${X}`)