/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1050
URI Online Judge | 1050
DDD
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um número inteiro que representa um código de DDD para discagem interurbana.Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:




Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

  Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada.Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.
*/


var lines =
  `11
`.split('\n')

let entrada = Number(lines[0])

function ddd (number) {
  switch(number) {
    case 61: return 'Brasilia'
    case 71: return 'Salvador'
    case 11: return 'Sao Paulo'
    case 21: return 'Rio de Janeiro'
    case 32: return 'Juiz de Fora'
    case 19: return 'Campinas'
    case 27: return 'Vitoria'
    case 31: return 'Belo Horizonte'
    default: return 'DDD nao cadastrado'
  }
}

console.log(ddd(entrada))
