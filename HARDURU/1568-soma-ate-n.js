/**
URI Online Judge | 1568
{soma+=i++} até N
Por Shahriar Manzoor, SEU BD Bangladesh

Timelimit: 3
Todos os números positivos podem ser expressos como a soma de um, dois ou mais números inteiros positivos consecutivos. Por exemplo, 9 pode ser expresso em três diferentes formas, 2+3+4, 4+5 ou 9. Dado um número inteiro menor que (9*10^14+1) ou (9E14 + 1) ou (9*10¹⁴ +1), você terá que determinar de quantas maneiras este número pode ser expresso como a soma de números consecutivos.
Entrada
O arquivo de entrada contém menos de 1100 linhas de entrada (casos de teste). Cada caso de teste contém um inteiro N (0 ≤ N ≤ 9E14) . O final de entrada é determinado por EOF.

Saída
Para cada caso de teste produza uma linha de saída. Esta linha deverá conter um inteiro que informa de quantas maneiras N pode ser expresso como a soma de inteiros consecutivos.

Exemplo de Entrada
9

11

12

Exemplo de Saída

3

2

2

Math Lovers’ Contest
*/
const lines = `899999640000011
899998380000053
899998200000059
899997780000073
899997660000077
899997060000097
899996940000101`.split('\n')

const entrada = lines.map(Number)

function posicaoPa (posicao, casoBase = 1, salto = 1) {
  if (!posicao) return 0
  return casoBase + (posicao - 1) * salto
}

function somaAte (posicao, casoBase = 0, salto = 1) {
  const valorNaPosicao = posicaoPa(posicao, casoBase, salto)
  return posicao * (casoBase + valorNaPosicao) / 2
}

function verificaValor(numeroAlvo, qtdNumeros) {
  const soma = somaAte(qtdNumeros)
  return (numeroAlvo - soma) % qtdNumeros === 0
}

function qtdManeiras (numeroAlvo) {
  var maneiras = 0
  var qtdNumeros = 1
  while(qtdNumeros <= ~~(numeroAlvo / 3)) {
    if (verificaValor(numeroAlvo, qtdNumeros))
      maneiras += 1
    qtdNumeros += 1
  }
  return maneiras || 1
}

entrada.forEach(numero => console.log(qtdManeiras(numero)))