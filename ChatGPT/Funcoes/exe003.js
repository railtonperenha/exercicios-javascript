// 3. Maior Número em uma Lista
// Crie uma função chamada maiorNumero que recebe um array de números e retorna o maior valor.

function maiorNumero(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return 'Por favor, forneça um array válido com números.'
    }
    return `O maior número é ${Math.max(...numeros)}`;
};

console.log(maiorNumero([32, 7, 3, 58]));