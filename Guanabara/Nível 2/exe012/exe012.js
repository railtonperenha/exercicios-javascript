function clicou () {
    let number = Number(prompt('Digite um número: '));
    let result = document.getElementById('result');

    if (number % 2 == 0) {
        result.innerHTML = `<p>O número ${number} que foi digitado é <strong>PAR!</strong></p>`;
    } else {
        result.innerHTML = `<p>O número ${number} que foi digitado é <strong>ÍMPAR!</strong></p>`;
    }
}