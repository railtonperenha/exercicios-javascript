let result = document.getElementById('result');
let computador = 0;
let jogador = 0;

function sortear () {
    let minimo = 1;
    let maximo = 100;
    let diferenca = maximo - minimo;
    let aleatorio = Math.random();
    computador = minimo + Math.trunc(diferenca * aleatorio);
}

function jogar () {
    jogador = Number(prompt('Qual é o seu palpite ?'));
    if (jogador < computador) {
        result.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!</strong></p>`;
    } else if (jogador > computador) {
        result.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR!</strong></p>`;
    } else if (jogador == computador) {
        result.innerHTML += `<p><strong>PARABÉNS, VOCÊ ACERTOU!</strong> Eu tinha sorteado o número ${computador}</p>`;
        document.getElementById('botao').style.visibility = 'hidden';
    }
}