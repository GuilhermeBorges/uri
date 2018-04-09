/*
URI Online Judge | 1048
Aumento de Salário
Por Neilor Tonin, URI  Brasil

Timelimit: 1
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:





Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
400.00

Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 %

800.01

Novo salario: 880.01
Reajuste ganho: 80.00
Em percentual: 10 %

2000.00

Novo salario: 2140.00
Reajuste ganho: 140.00
Em percentual: 7 %
*/


var lines =
  `2000.00
`.split('\n')

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

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
let entrada = formatEntry(lines)[0][0]


function calcAumento(salario) {
  if (salario <= 400) return ({aumento: salario*0.15, percentual: 15, novoSalario: (salario*0.15)+salario })
  if( salario <= 800) return ({aumento: salario*0.12, percentual: 12, novoSalario: (salario*0.12)+salario })
  if( salario <= 1200) return ({aumento: salario*0.10, percentual: 10, novoSalario: (salario*0.10)+salario })
  if( salario <= 2000) return ({aumento: salario*0.07, percentual: 07, novoSalario: (salario*0.07)+salario })
  return ({aumento: salario*0.04, percentual: 04, novoSalario: (salario*0.04)+salario })
}

let resultado = calcAumento(entrada)

console.log(`Novo salario: ${resultado.novoSalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${resultado.aumento.toFixed(2)}`)
console.log(`Em percentual: ${resultado.percentual} %`)