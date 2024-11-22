function somar () {
    let numero1 = Number(prompt("Digite um número: "));
    let numero2 = Number(prompt("Digite putro número: "));
    let soma = numero1 + numero2

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `A soma entre <mark>${numero1}</mark> e <mark>${numero2}</mark> é igual a <strong>${soma}</strong>`;
}