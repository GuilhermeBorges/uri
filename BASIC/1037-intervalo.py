"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1037
URI Online Judge | 1037
Intervalo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
25.01

Intervalo (25,50]

25.00

Intervalo [0,25]

100.00

Intervalo (75,100]

-25.02

Fora de intervalo

"""

def readFloat():
  return float(input())

def whichInterval(number, intervals):
  for i in range(0,len(intervals)):
    if (number <=intervals[i][1] and (number > intervals[i][0] or (number >= intervals[i][0] and i == 0) )):
      begin = '[' if(i==0) else '('
      end = ']'
      return begin + str(intervals[i][0])+','+str(intervals[i][1]) + end
  return False


def main():
  intervals = [(0,25),(25,50),(50,75),(75,100)]
  number = readFloat()
  answer = whichInterval(number, intervals)
  if(not answer):
    print("Fora de intervalo")
  else:
    print("Intervalo {0}".format(answer))

main()