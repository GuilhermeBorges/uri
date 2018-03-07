"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1036
URI Online Judge | 1036
Fórmula de Bhaskara
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	Exemplos de Saída
10.0 20.1 5.1

R1 = -0.29788
R2 = -1.71212

0.0 20.0 5.0

Impossivel calcular

10.3 203.0 5.0

R1 = -0.02466
R2 = -19.68408

10.0 3.0 5.0

Impossivel calcular


"""

import math

def readFloats():
  return list(map(float, input().split(' ')))

def bhaskara(A,B,C):
  operand = B**2 - 4*A*C
  if(operand < 0):
    return False,0,0
  return True, (-B + math.sqrt(operand))/(2*A),(-B - math.sqrt(operand))/(2*A)

def main():
  A,B,C = readFloats()
  if(A==0):
    print("Impossivel calcular")
    return
  answer, answer1, answer2 = bhaskara(A,B,C)
  if(answer):
    print("R1 = {0:.5f}".format(answer1))
    print("R2 = {0:.5f}".format(answer2))
  else:
    print("Impossivel calcular")
  
main()