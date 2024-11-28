// Iterar sobre um objeto
// Crie um objeto chamado livro com as propriedades titulo, autor e anoPublicacao. Use um loop for...in para exibir todas as propriedades e seus valores.
const livro = {
    titulo: 'Joaninha',
    autor: 'Joana',
    anoPublicacao: 2020
};

for (let info in livro) {
    console.log(`${info}: ${livro[info]}`); //O laço 'for...in' interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
}