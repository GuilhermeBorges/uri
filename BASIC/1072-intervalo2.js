/*
URI Online Judge | 1072
Intervalo 2
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.

Exemplo de Entrada	Exemplo de Saída
4
14
123
10
-25

2 in
2 out
*/


var lines = `1
1`.split('\n')


// var input = require('fs').readFileSync('/dev/stdin', 'utf8')
// var lines = input.split('\n')



let entrada = lines.map(Number)
let qtd = entrada.shift()
entrada = entrada.splice(0, qtd)


function noIntervalo(valor, inicio = 10, fim = 20) {
  return valor <= fim && valor >= inicio
}


const qtdIn = entrada
  .filter(valor => noIntervalo(valor))
  .length

const qtdOut = entrada
  .filter(valor => !noIntervalo(valor))
  .length
console.log(`${qtdIn} in`)
console.log(`${qtdOut} out`)
