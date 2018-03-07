"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1013
URI Online Judge | 1013
O Maior
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

Exemplos de Entrada	Exemplos de Saída
7 14 106

106 eh o maior

217 14 6

217 eh o maior

"""

def readInts():
  return list(map(int, input().split(' ')))

def biggest(intArray):
  return max(intArray)

def maiorAB(A,B):
  return int((A+B+abs(A-B))/2)

def greatest(intArray):
  if (len(intArray) == 1):
    return intArray[0] 
  else:
    return greatest( [maiorAB(intArray[0], intArray[1])] + intArray[2:] )

def main():
  intArray = readInts()
  # print("{0} eh o maior".format(biggest(intArray)))
  print("{0} eh o maior".format(greatest(intArray)))

main()
  