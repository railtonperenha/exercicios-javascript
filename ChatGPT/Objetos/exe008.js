// Deletar propriedades de um objeto
// Crie um objeto chamado animal com as propriedades tipo, nome e idade. Remova a propriedade idade do objeto.

const animal = {
    tipo: 'Felino',
    nome: 'Onça Pintada',
    idade: 15
};

delete(animal.idade);
console.log(animal);
