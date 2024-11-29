// Aninhar objetos
// Crie um objeto chamado endereco com as propriedades rua, numero e cidade. Adicione este objeto como uma propriedade de um objeto pessoa.
const pessoa = {
    nome: 'Railton',
    idade: 34,
    endereco: {
        rua: 'Mestre Tito',
        numero: 147,
        cidade: 'Campinas'
    }
};

for (let consult in pessoa) {
    // Verifica se a propriedade é um objeto: CORRIGIDO
    if (typeof pessoa[consult] === 'object') {
        console.log(`${consult}:`);
        for (let subProp in pessoa[consult]) {
            console.log(`  ${subProp}: ${pessoa[consult][subProp]}`);
        }
    } else {
        console.log(`${consult}: ${pessoa[consult]}`);
    }
};

// O código verifica com typeof pessoa[consult] === 'object' se a propriedade atual é um objeto.
// Se for, usa outro laço for...in para iterar pelas propriedades internas do objeto endereco.
// Caso contrário, imprime diretamente o valor da propriedade.
