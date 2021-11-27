var vetor = [4, 6, 1, 'str', 6]
//           0, 1, 2, 3
vetor[4] = 9 // Caso tente atribuir um valor em um indice vazio(não declarado antes), o JS cria o indice
vetor.push('ultimo') // Adiciona o valor na ultima posição
console.log(vetor)
vetor[100] = 'x'
console.log(vetor[15]) // Consegue adicionar valor em qualquer indice
console.log(vetor.indexOf(6)) // retorna o indice q tem o valor 6, se não tiver o 6 retorna -1
console.log(vetor[-1])
// for (x in vetor) o in só funciona para array e objetos, NÃO funciona para str com em Python ):

for (x in vetor) {
    console.log(x)
}