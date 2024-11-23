function iniciar () {
    let primeiroNumero = Number(prompt('Primeiro valor: '));
    let segundoNumero = Number(prompt('Segundo valor: '));
    let opcao = Number(prompt(`Valores informados ${primeiroNumero} e ${segundoNumero}<br>
        O que vamos fazer ?
        [1] Somar
        [2] Subtrair
        [3] Multiplicar
        [4] Dividir`));
    let result = document.getElementById('result')
    result.innerHTML = `<h3>Calculando...</3>`

    switch (opcao) {
        case 1:
            let soma = primeiroNumero + segundoNumero;
            result.innerHTML += `${primeiroNumero} + ${segundoNumero} = ${soma}`;
            break;
        
        case 2:
            let subtrair = primeiroNumero - segundoNumero;
            result.innerHTML += `${primeiroNumero} - ${segundoNumero} = ${subtrair}`;
            break;
        
        case 3:
            let multiplicacao = primeiroNumero * segundoNumero;
            result.innerHTML += `${primeiroNumero} x ${segundoNumero} = ${multiplicacao}`;
            break;

        case 4:
            let divisao = primeiroNumero / segundoNumero;
            result.innerHTML += `${primeiroNumero} ÷ ${segundoNumero} = ${divisao}`;            
            break;
        
        default:
            alert('Opção inválida, tente novamente!');
            result.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
            break;
            
    }
}

function reset () {
    result.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
}