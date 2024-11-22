alert("Bem vindo ao meu site!")

function calcular () {
    let numero = prompt("Digite um número: ");
    let dobro = numero * 2;
    let metade = numero / 2;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O dobro de ${numero} é ${dobro} e a metade é ${metade}`.replace('.', ',');
}