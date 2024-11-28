// Comparar dois objetos
// Crie dois objetos pessoa1 e pessoa2, ambos com as propriedades nome e idade. Verifique se os dois objetos têm os mesmos valores para ambas as propriedades.

const pessoa1 = {
    nome: 'Railton',
    idade: 34
};

const pessoa2 = {
    nome: 'Gabriela',
    idade: 29
};

const saoIguai = pessoa1.nome === pessoa2.nome && pessoa1.idade === pessoa2.idade;
console.log(saoIguai ? 'Os objetos tem os mesmos valores!' : 'Os objetos tem valores diferentes');
