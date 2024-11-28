// 8. Soma de Valores em um Array
// Crie uma função chamada somaArray que recebe um array de números e retorna a soma de todos os valores
function somaArray (numeros) {
    return numeros.reduce((soma, numero) => soma + numero, 0);

}

const lista = [3, 5, 9, 8, 2];
console.log(somaArray(lista));