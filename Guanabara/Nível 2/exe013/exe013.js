function clicou () {
    let firstNumber = Number(prompt('Digite um número: '));
    let secondNumber = Number(prompt('Digite outro número: '));
    let result = document.getElementById('result');

    if (firstNumber > secondNumber) {
        result.innerHTML = `<p>Analisando os valores ${firstNumber} e ${secondNumber}, o maior valor é <strong>${firstNumber}</strong></p>`;
    } else if (firstNumber < secondNumber) {
        result.innerHTML = `<p>Analisando os valores ${firstNumber} e ${secondNumber}, o maior valor é <strong>${secondNumber}</strong></p>`;        
    } else {
        result.innerHTML = `<p>Analisando os valores ${firstNumber} e ${secondNumber}, os números são <strong>iguais!</strong></p>`;
    }
}