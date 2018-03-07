"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1019
URI Online Judge | 1019
Conversão de Tempo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
556

0:9:16

1

0:0:1

140153

38:55:53


"""
def readInt():
  return int(input())

def convertTime(timeInSeconds):
  hours = int(timeInSeconds / (60*60) )
  minutes = int(timeInSeconds / 60) % 60
  seconds = int(timeInSeconds % 60)
  return "{0}:{1}:{2}".format(hours, minutes, seconds)

def main():
  print(convertTime(readInt()))

main()