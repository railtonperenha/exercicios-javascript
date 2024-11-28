// 10. Alterar Propriedade de um Objeto
// Escreva uma função chamada atualizaIdade que recebe um objeto representando uma pessoa (com nome e idade) e um novo valor de idade. A função deve atualizar a propriedade idade do objeto e retorná-lo.
const pessoa = {
    nome: 'Railton',
    idade: 34,
    atualizaIdade: function () {
        return this.idade = 45;
    }
};

console.log(pessoa.atualizaIdade());