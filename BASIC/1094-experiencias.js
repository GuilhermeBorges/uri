/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1094
URI Online Judge | 1094
Experiências
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.

Exemplo de Entrada	Exemplo de Saída
10
10 C
6 R
15 S
5 C
14 R
9 C
6 R
8 S
5 C
14 R

Total: 92 cobaias
Total de coelhos: 29
Total de ratos: 40
Total de sapos: 23
Percentual de coelhos: 31.52 %
Percentual de ratos: 43.48 %
Percentual de sapos: 25.00 %
*/

var lines = `10
10 C
6 R
15 S
5 C
14 R
9 C
6 R
8 S
5 C
14 R`.split('\n')


function formatEntry(lines) {
  let entrada = lines
  let qtd = entrada.shift()
  let linhas = entrada.splice(0, qtd)
  const animalIndex = {
    'C': 'coelho',
    'S': 'sapo',
    'R': 'rato'
  }
  return linhas.map(e => {
    const quantia = Number(e.split(' ')[0])
    const animal = e.split(' ')[1]
    return {quantia, animal: animalIndex[animal]}
  })
}

;(function main(lines) {
  const entrada = formatEntry(lines)
  const resultado = entrada.reduce((acumulado, atual) => {
    acumulado.total += atual.quantia
    if(atual.animal==='rato') acumulado.totalRatos += atual.quantia
    if(atual.animal==='sapo') acumulado.totalSapos += atual.quantia
    if(atual.animal==='coelho') acumulado.totalCoelhos += atual.quantia
    return acumulado
  }, {
    total: 0,
    totalCoelhos: 0,
    totalSapos: 0,
    totalRatos: 0,
  })
  console.log(`Total: ${resultado.total} cobaias`)
  console.log(`Total de coelhos: ${resultado.totalCoelhos}`)
  console.log(`Total de ratos: ${resultado.totalRatos}`)
  console.log(`Total de sapos: ${resultado.totalSapos}`)
  console.log(`Percentual de coelhos: ${(resultado.totalCoelhos * 100 /resultado.total).toFixed(2)} %`)
  console.log(`Percentual de ratos: ${(resultado.totalRatos * 100 /resultado.total).toFixed(2)} %`)
  console.log(`Percentual de sapos: ${(resultado.totalSapos * 100 /resultado.total).toFixed(2)} %`)
})(lines)