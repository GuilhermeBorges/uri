"""
https://www.urionlinejudge.com.br/judge/pt/problems/view/1020
URI Online Judge | 1020
Idade em Dias
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
400

1 ano(s)
1 mes(es)
5 dia(s)

800

2 ano(s)
2 mes(es)
10 dia(s)

30

0 ano(s)
1 mes(es)
0 dia(s)


"""


def readInt():
  return int(input())

def ageFromDays(days):
  years = int(days / 365)
  months = int(int(days % 365) / 30)
  days = int(days % 365) % 30
  return years, months, days

def main():
  ageInDays = readInt()
  years, months, days = ageFromDays(ageInDays)
  print("{0} ano(s)".format(years))
  print("{0} mes(es)".format(months))
  print("{0} dia(s)".format(days))

main()