let contagem = 0;
let result = document.getElementById('resultado');

function contar() {
    contagem ++;
    if (contagem === 1) {
        result.innerHTML = `O contador está com <mark>${contagem}</mark> clique`;
    } else {
        result.innerHTML = `O contador está com <mark>${contagem}</mark> cliques`;
    }
}

function limpar() {
    contagem = 0;
    result.innerHTML = `O contador está com 0 clique`
}