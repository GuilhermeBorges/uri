/*
https://www.urionlinejudge.com.br/judge/pt/problems/view/1080
URI Online Judge | 1080
Maior e Posição
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
2
113
45
34565
6
...
8
 

34565
4
*/

var lines = [...Array.from({length:100}).keys()]
lines[54] = 100
lines[52] = 1500
lines[56] = 1600


lines = `91256
  86282
  7413
  39378
  8908
  93640
  86827
  62574
  81594
  98132
  72117
  44273
  98106
  17724
  27246
  82396
  1912
  2947
  61016
  49392
  34438
  60214
  43621
  97692
  80241
  84156
  22898
  74046
  95841
  78350
  21589
  68918
  51916
  86720
  45490
  4608
  8278
  95092
  4964
  20510
  95852
  72503
  30559
  77584
  60122
  20845
  11958
  10638
  31737
  35733
  19099
  61828
  52067
  18769
  84318
  57223
  33793
  30478
  22613
  75864
  56965
  59750
  63382
  35984
  2526
  54792
  76279
  57168
  57551
  19698
  81701
  50200
  22289
  14742
  90782
  39180
  48620
  64174
  43489
  39230
  26338
  28277
  7638
  38245
  8923
  27751
  42993
  34289
  59810
  75892
  85354
  63426
  39450
  69307
  9507
  8322
  53290
  60769
  89936
  29503
  `.split('\n')

;(function(lines){
  const entrada = lines.map(Number)
  const result = entrada.reduce((maior, atual, index) => {
     if(maior.valor < atual) {
       maior.valor = atual
       maior.posicao = index+1
     }
     return maior
  }, {valor:0, posicao:0});
  console.log(result.valor)
  console.log(result.posicao)
})(lines)