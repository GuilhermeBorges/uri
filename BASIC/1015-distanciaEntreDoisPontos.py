"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1015
URI Online Judge | 1015
Distância Entre Dois Pontos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

Exemplo de Entrada	Exemplo de Saída
1.0 7.0
5.0 9.0

4.4721

-2.5 0.4
12.1 7.3

16.1484

2.5 -0.4
-12.2 7.0

16.4575


"""

import math

class point():
  def __init__(self,x,y):
    self.x = x
    self.y = y

# def readPoints():
#   x = list(map(float, input().split(' ')))
#   return x[0], x[1]

def readPoints():
  x = input().split(' ')
  return float(x[0]), float(x[1])

def pointsDistance(pA, pB):
  return math.sqrt((pA.x - pB.x)**2 + (pA.y - pB.y)**2)

def main():
  x1,y1 = readPoints()
  x2,y2 = readPoints()
  distance = pointsDistance(point(x1,y1),point(x2,y2))
  print("{0:.4f}".format(distance))

main()