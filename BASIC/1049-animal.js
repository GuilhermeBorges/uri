/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1049
URI Online Judge | 1049
Animal
Por Neilor Tonin, URI  Brasil

Timelimit: 1
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

  Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

  Saída
Imprima o nome do animal correspondente à entrada fornecida.

Exemplos de Entrada	Exemplos de Saída
vertebrado
mamifero
onivoro

homem

vertebrado
ave
carnivoro

aguia

invertebrado
anelideo
onivoro

minhoca
*/

var lines =
  `vertebrado
  mamifero
  onivoro`.split('\n')

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
const esquema = {
  'vertebrado': {
    'ave':{
      'carnivoro':'aguia',
      'onivoro':'pomba'
    },
    'mamifero': {
      'onivoro': 'homem',
      'herbivoro': 'vaca'
    }
  },
  'invertebrado': {
    'inseto': {
      'hematofago': 'pulga',
      'herbivoro': 'lagarta'
    },
    'anelideo': {
      'hematofago': 'sanguessuga',
      'onivoro': 'minhoca'
    }
  }
}

function formatEntry(entry) {
  return lines
    .map(l => l.split(' '))
    .map(el => el.filter( x => x !=='')[0])
    .concat()
}
let entrada = formatEntry(lines)

function is(caracteristicas, esquema) {
  if(typeof(esquema) !== 'string')
    return is(caracteristicas, esquema[Object.keys(esquema)
      .filter(k => caracteristicas.includes(k))[0]])
  return esquema
}

console.log(is(entrada, esquema))