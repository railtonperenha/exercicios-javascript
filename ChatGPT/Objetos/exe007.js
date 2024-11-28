// Aninhar objetos
// Crie um objeto chamado endereco com as propriedades rua, numero e cidade. Adicione este objeto como uma propriedade de um objeto pessoa.
let pessoa = {
    nome: 'Railton',
    idade: 34,
    endereco: {
        rua: 'Mestre Tito',
        numero: 147,
        cidade: 'Campinas'
    }
};

for (let consult in pessoa) {
    console.log(pessoa[consult]);
};