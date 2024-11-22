let botao = 0
let result = document.getElementById('result');

function clique1 () {
    botao ++;
    result.innerHTML += `<p>Clicou no primeiro botão</p>`;
}

function clique2 () {
    botao ++;
    result.innerHTML += `<p>Clicou no segundo botão</p>`;
    
}

function clique3 () {
    botao ++;
    result.innerHTML += `<p>Clicou no terceiro botão</p>`;
}

function clique4 () {
    botao ++;
    result.innerHTML += `<p>Clicou no quarto botão</p>`;
}

function limpar () {
    botao = 0
    result.innerHTML = null
}