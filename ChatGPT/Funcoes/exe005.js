// 5. Contador de Vogais
// Crie uma função chamada contaVogais que recebe uma string e retorna o número de vogais (a, e, i, o, u) presentes na string.

function contaVogais (str) {
    let count = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i ++) {
        if (vogais.includes(str[i].toLowerCase())) {
            count ++;
        }
    }

    return count;
}
let nome = 'Railton'
console.log(`O nome ${nome} contém ${contaVogais(nome)} vogais`);
