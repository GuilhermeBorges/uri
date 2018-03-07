"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1006

URI Online Judge | 1006
Média 2
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a variável MEDIA conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada	Exemplos de Saída
5.0
6.0
7.0

MEDIA = 6.3

5.0
10.0
10.0

MEDIA = 9.0

10.0
10.0
5.0

MEDIA = 7.5

"""

def readFloat():
  return float(input())

def average(grades, weight):
  total = 0
  for i in range(0,len(grades)):
    total += grades[i] * weight[i]
  return total/sum(weight)

def main():
  gradeA = readFloat()
  gradeB = readFloat()
  gradeC = readFloat()
  grades = [gradeA, gradeB, gradeC]
  weights = [2,3,5]
  result = round( average(grades,weights) , 1)
  print('MEDIA = {0:.1f}\n'.format(result),end='')

main()