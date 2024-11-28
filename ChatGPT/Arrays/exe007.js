// 7. Filtrar Números Pares
// Crie uma função chamada filtraPares que recebe um array de números e retorna um novo array contendo apenas os números pares.

function filtraPares () {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 1; i <= Math.max(...numeros); i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

filtraPares();