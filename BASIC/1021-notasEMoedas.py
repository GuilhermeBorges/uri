"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1021
URI Online Judge | 1021
Notas e Moedas
Por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
576.73

NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01

4.00

NOTAS:
0 nota(s) de R$ 100.00
0 nota(s) de R$ 50.00
0 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
0 nota(s) de R$ 5.00
2 nota(s) de R$ 2.00
MOEDAS:
0 moeda(s) de R$ 1.00
0 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
0 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
0 moeda(s) de R$ 0.01

91.01

NOTAS:
0 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
2 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
0 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
0 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
0 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
1 moeda(s) de R$ 0.01

"""
def readFloat():
  return float(input())

def minimumBankNotes(price, notes, report = {}):
  qtd = int(price / notes[-1])
  rest = round(price % notes[-1],2)
  report[str(notes[-1])] = qtd
  if(rest == 0 or len(notes) == 1):
    return report
  else:
    return minimumBankNotes(rest, notes[:-1], report)

def createdict(notes):
  dictio = {}
  for n in notes:
    dictio[str(n)] = 0
  return dictio

def printResponse(dictio, notes):
  print('NOTAS:')
  for n in range(len(notes)-1,-1,-1):
    if(notes[n] == 1):
      print('MOEDAS:')
      print("{0} moeda(s) de R$ {1}.00".format(dictio[str(notes[n])],notes[n]))
    elif(notes[n]< 1):
      print("{0} moeda(s) de R$ {1:.2f}".format(dictio[str(notes[n])],notes[n]))
    else:
      print("{0} nota(s) de R$ {1}.00".format(dictio[str(notes[n])],notes[n]))

def main():
  notesAndCoins = [0.01, 0.05, 0.10, 0.25, 0.50, 1, 2, 5, 10, 20, 50, 100]
  value = readFloat()
  if(0 <= value and value <= 1000000 ):
    responseDict = createdict(notesAndCoins)
    printResponse(minimumBankNotes(value, notesAndCoins, responseDict),notesAndCoins)

main()