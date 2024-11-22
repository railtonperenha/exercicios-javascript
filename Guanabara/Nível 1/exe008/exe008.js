function calcular () {
    let number = Number(prompt('Digite um número: '));
    let result = document.getElementById('resultado');

    result.innerHTML = `<p>O número a ser analisado aqui será o <strong>${number}</strong></p><hr>`
    result.innerHTML += `<p>O seu valor absoluto é ${Math.abs(number)}</p>`
    result.innerHTML += `<p>A sua parte inteira é ${Math.trunc(number)}</p>`
    result.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(number)}</p>`
    result.innerHTML += `<p>A sua raíz quadrada é ${Math.sqrt(number)}</p>`
    result.innerHTML += `<p>A sua raíz cubica é ${Math.cbrt(number)}</p>`
    result.innerHTML += `<p>O valor de ${number}² é ${Math.pow(number, 2)}</p>`
    result.innerHTML += `<p>O valor de ${number}³ é ${Math.pow(number, 3)}</p>`
}