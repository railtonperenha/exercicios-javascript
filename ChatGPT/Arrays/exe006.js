// 6. Inverter uma Lista
// Escreva uma função chamada inverteArray que recebe um array como parâmetro e retorna um novo array com os elementos na ordem inversa.

function inverteArray (numeros) {
    numeros = [1, 2, 3, 4, 5];
    console.log(`Ordem correta: ${numeros} `)

    let novoArray = numeros.reverse();
    return `Ordem invertida: ${novoArray}`;
}

console.log(inverteArray());