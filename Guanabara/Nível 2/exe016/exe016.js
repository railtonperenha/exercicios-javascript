function calcular () {
    let anoAgora = new Date;
    let anoAtual = anoAgora.getFullYear();

    let anoNascimento = Number(prompt('Em que ano você nasceu ? '));
    let idade = anoAtual - anoNascimento;

    let result = document.getElementById('result');
    result.innerHTML = `<p>Quem nasceu em <strong>${anoNascimento}</strong> vai completar <strong>${idade} anos</strong> em <strong>${anoAtual}</strong></p>`;

}

function limpar () {
    result.innerHTML = '<p>Aqui vai aparecer algo...</p>';
}