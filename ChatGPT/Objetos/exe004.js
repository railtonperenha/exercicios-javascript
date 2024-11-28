// Verificar propriedade no objeto
// Crie um objeto chamado usuario com as propriedades nome e email. Verifique se a propriedade senha existe no objeto.
const usuario = {
    nome: 'railton',
    email: 'railton@email.com'
};


console.log(usuario.hasOwnProperty('senha')); //O método 'hasOwnProperty()' retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).