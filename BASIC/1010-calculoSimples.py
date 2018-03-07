"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1010
URI Online Judge | 1010
Cálculo Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

Exemplos de Entrada	Exemplos de Saída
12 1 5.30
16 2 5.10

VALOR A PAGAR: R$ 15.50

13 2 15.30
161 4 5.20

VALOR A PAGAR: R$ 51.40

1 1 15.10
2 1 15.10

VALOR A PAGAR: R$ 30.20

"""


def readNumbers():
  x = input().split(' ')
  return int(x[0]),int(x[1]),float(x[2])

def main():
  product1, amount1, price1 = readNumbers()
  product2, amount2, price2 = readNumbers()

  print("VALOR A PAGAR: R$ {0:.2f}".format(amount1*price1 + amount2*price2))

main()