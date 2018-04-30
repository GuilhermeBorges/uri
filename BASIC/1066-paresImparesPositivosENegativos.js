/*URI Online Judge | 1066
Pares, Ímpares, Positivos e Negativos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 5 valores Inteiros.A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

  Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

  Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.

Exemplo de Entrada	Exemplo de Saída
  - 5
0
  - 3
  - 4
12

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

let lines =
  `-5
0
-3
-4
12
`.split('\n')



let entrada = lines
  .filter(a => a !== '')
  .map(Number)


function par(element) {
  return element % 2 === 0
}

function impar(element) {
  return element % 2 !== 0
}

function positivo(element) {
  return element > 0
}

function negativo (element) {
  return element < 0
}
console.log(`${entrada.filter(par).length} valor(es) par(es)`)
console.log(`${entrada.filter(impar).length} valor(es) impar(es)`)
console.log(`${entrada.filter(positivo).length} valor(es) positivo(s)`)
console.log(`${entrada.filter(negativo).length} valor(es) negativo(s)`)