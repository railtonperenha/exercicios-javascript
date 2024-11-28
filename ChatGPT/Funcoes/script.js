function iniciar () {
    let nome = prompt('Digite seu nome: ');

    function contarVogais (str) {
        let count = 0;
        const vogais = ['a', 'e', 'i', 'o', 'u'];
        str.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            if (vogais.includes(str[i])) {
                count ++;
            }
        }

        return count;
    }

    let numVogais = contarVogais(nome);
    let result = document.getElementById('result');
    result.innerHTML = `<p>O nome <strong>${nome}</strong> tem <mark>${numVogais}</mark> vogais.</p>`
}

function reset () {
    result.innerHTML = `<p>O resultado vai aparecer aqui!</p>`  
}