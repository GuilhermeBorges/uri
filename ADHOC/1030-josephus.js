`
https://www.urionlinejudge.com.br/judge/pt/problems/view/1030
URI Online Judge | 1030
A Lenda de Flavious Josephus
Por Neilor Tonin, URI  Brasil

Timelimit: 1
O problema de Josephus é assim conhecido por causa da lenda de Flavius Josephus, um historiador judeu que viveu no século 1. Segundo o relato de Josephus do cerco de Yodfat, ele e seus companheiros(40 soldados) foram presos em uma caverna, cuja saída foi bloqueada pelos romanos.Eles preferiram suicidar - se a serem capturados, e decidiram que iriam formar um círculo e começar a matar - se pulando de três em três.Josephus afirma que, por sorte ou talvez pela mão de Deus, ele permaneceu por último e preferiu entregar - se aos romanos a suicidar - se.

  Entrada
Haverá NC(1 ≤ NC ≤ 30) casos de teste.Em cada caso de teste de entrada haverá um par de números inteiros positivos n(1 ≤ n ≤ 10000) e k(1 ≤ k ≤ 1000).O  número n representa a quantidade de pessoas no círculo, numeradas de 1 até n.O número k representa o tamanho do salto de um homem até o próximo homem que será morto.

Segue um exemplo com 5 homens e um salto = 2.




Neste exemplo o elemento que restará após as eliminações é 3.
Saída
Para cada caso de teste de entrada será apresentada uma linha de saída no seguinte formato: Case n: m tendo sempre um espaço antes do n e do m.

Exemplo de Entrada	Exemplo de Saída
3
5 2
6 3
1234 233

Case 1: 3
Case 2: 1
Case 3: 25
`

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

var lines = 
`3
5 2
6 3
1234 233
`.split('\n')

function linhasEntrada(lines) {
  return lines
    // .split('\n')
    .slice(0, -1)
}

function formatarEntrada(entrada) {
  return {
    quantidade: Number(entrada[0]),
    casos: entrada
            .slice(1)
            .map(function(item) {
              return {
                qtdPessoas: Number(item.split(' ')[0]),
                tamanhoDoSalto: Number(item.split(' ')[1])
              }
            })
  }
}
 

entrada = linhasEntrada(lines)
entrada
z = entrada.slice(1)
z
lines
x = formatarEntrada(entrada)

;(function main() {
  var entrada = formatarEntrada(linhasEntrada(lines))
  // for (var i = 0; i < entrada.quantidade; i++ ) {
  //   josephus(entrada.casos[i].qtdPessoas, entrada.casos[i].tamanhoDoSalto)
  // }
  josephus(toArray(5),2)
})()


function josephus(qtdPessoas, tamanhoDoSalto) {
  console.log(tamanhoDoSalto)
}




console.log(toArray(5))

function josephusArray(posicao, array, salto) {
  if(array.length === 1)
    return array[0]
  else
    josephusArray(posicao + salto, array.slice(),salto)
}

function toArray(number) { return [...Array(number).keys()].map(x => x + 1) }

/**
 * Dada um vetor de tamanho retorna a posicao referente à passada
 * @param {Inter} posicao 
 * @param {Inter} tamanho 
 */
function posicaoCircular (posicao, tamanho) {
    pos = key
    if (key >= tamanho) pos = key % tamanho
    if (key < 0) pos = (key % tamanho) + tamanho
    return pos
}



//LIXOOO apenas uasr a função get aí dentro pq ela fununcia ;)
var createRingBuffer = function (length) {

  var pointer = 0, buffer = [];

  return {
    get: function (key) {
      pos = key
      if (key >= buffer.length) pos = key % buffer.length
      if (key < 0) pos = (key % buffer.length) + buffer.length
      return buffer[pos];
    },
    push: function (item) {
      buffer[pointer] = item;
      pointer = (length + pointer + 1) % length;
    }
  };
};