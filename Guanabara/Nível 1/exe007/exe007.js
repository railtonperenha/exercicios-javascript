function media () {
    let nome = prompt('Nome do Aluno: ');
    let prova1 = Number(prompt('Primeira Nota: ').replace(',', '.'));
    let prova2 = Number(prompt('Segunda Nota: ').replace(',', '.'));

    let media = (prova1 + prova2) / 2;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Calculando a média final de <mark>${nome}</mark>.<br>`;
    resultado.innerHTML += `As notas obtidas foram <mark>${prova1}</mark> e <mark>${prova2}</mark>.<br>`;
    resultado.innerHTML += `A média final será <mark>${media}</mark>.`;
    // É utilizado += no inner.HTML para que "mantenha a frase anterior, adicionando essa outra frase". Se não fosse ele, a linha anterior seria apagada.
}