// 9. Objeto de Dados Pessoais
// Crie um objeto chamado pessoa com as propriedades: nome, idade e cidade. Em seguida, escreva uma função chamada descrevePessoa que recebe esse objeto como parâmetro e retorna uma string no formato: "Meu nome é [nome], tenho [idade] anos e moro em [cidade].".

const pessoa = {
    nome: 'Railton',
    idade: 34,
    cidade: 'Campinas',
    descrevePessoa: function () {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}`;
    }
};

console.log(pessoa.descrevePessoa());