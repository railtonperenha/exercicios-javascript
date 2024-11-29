// Converter objeto em array
// Crie um objeto chamado frutas com as propriedades maca: 3, banana: 2, e laranja: 5. Converta as chaves do objeto em um array.
const frutas = {
    maca: 3,
    banana: 2,
    laranja: 5
};

// Converter as chaves do objeto em um array
const chaves = Object.keys(frutas);
console.log(chaves);

//converter os valores
const valores = Object.values(frutas);
console.log(valores);

// Pares chave-valor
const pares = Object.entries(frutas);
console.log(pares);

// Object.keys(frutas) retorna um array contendo todas as chaves do objeto frutas.
// Object.values(frutas) retorna um array contendo todos os valores correspondentes às chaves do objeto frutas.
// Object.entries(frutas) retorna um array de arrays, onde cada sub-array contém um par chave-valor.