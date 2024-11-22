function calcular () {
    let nome = prompt('Nome do aluno: ');
    let prova1 = Number(prompt('Primeira Prova: '));
    let prova2 = Number(prompt('Segunda Prova: '));
    let media = (prova1 + prova2) / 2;

    let result = document.getElementById('result');
    result.innerHTML = `<p>Calculando a média final de ${nome}.</p>`
    result.innerHTML += `<p>As notas obtidas foram ${prova1} e ${prova2}</p>`;
    result.innerHTML += `<p>A média final será ${media}</p>`;

    if (media <= 5) {
        result.innerHTML += '<p>A mensagem que temos é: <strong style="color: red;"> Estude mais!</strong></p>';
    } else {
        result.innerHTML += '<p>A mensagem que temos é: <strong style="color: green;"> Meus Parabéns!</strong></p>';
    }

}