"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1018
URI Online Judge | 1018
Cédulas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

Exemplo de Entrada	Exemplo de Saída
576

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

11257

11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

503

503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00


"""


def readInt():
  return int(input())

def minimumBankNotes(price, notes, report = {}):
  qtd = int(price / notes[-1])
  rest = price % notes[-1]
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

#Queria fazer apenas com o dicionario mas a ordenacao me ferrou 
def printResponse(dictio, notes):
  for n in range(len(notes)-1,-1,-1):
    print("{0} nota(s) de R$ {1},00".format(dictio[str(notes[n])],notes[n]))

def main():
  # Jeito certo seria fazer isso mas para ser mais eficiente estou colocando chumbado
  # notes = [100, 50, 20, 10, 5, 2, 1]
  # list.sort(notes)
  notes = [1, 2, 5, 10, 20, 50, 100]
  value = readInt()
  responseDict = createdict(notes)
  print(value)
  printResponse(minimumBankNotes(value,notes, responseDict),notes)

main()