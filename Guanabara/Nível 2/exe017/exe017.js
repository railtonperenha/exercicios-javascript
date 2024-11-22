function gerar () {
    let minimo = 1;
    let maximo = 100;
    let diferenca = maximo - minimo;
    let alatorio = Math.random();
    let numero = minimo + Math.trunc(diferenca * alatorio);

    let result = document.getElementById('result');
    result.innerHTML += `<p>Acabei de pensar no número <mark>${numero}</mark>!</p>`;
};

function limpar () {
    result.innerHTML = '<p>Cada vez que apertar o botão "gerar número", eu penso em um número entre 1 e 100.</p>'
};