/*```
URI Online Judge | 1044
Múltiplos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.

Exemplo de Entrada	Exemplo de Saída
6 24

Sao Multiplos

6 25

Nao sao Multiplos
```
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

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

function multiplos(a, b) {
    return (a > b) ? a % b == 0 : b % a == 0
}

(function main(){
    if(multiplos(...entrada)) console.log(`Sao Multiplos`)
    else console.log(`Nao sao Multiplos`)
})()
