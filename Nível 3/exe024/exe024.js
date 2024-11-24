function contar () {
    let result = document.getElementById('result');

    result.innerHTML = `<h2>Contagem regressiva!</h2>`;

    let cont = 10;
    while (cont >= 1) {
        result.innerHTML += `${cont} &#x1F449; `
        cont --;
    }

    result.innerHTML += ` &#x1F3C1;`;
}