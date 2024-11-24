function contar () {
    let result = document.getElementById('result');

    result.innerHTML = `<h2>Mostrando pares de 1 até 10</h2>`;

    let contador = 1;
    while (contador <= 10) {
        if (contador % 2 == 0) {
            result.innerHTML += `${contador} &#x1F449; `;
        }
        contador ++;
    }

    result.innerHTML += ` &#x1F3C1;`;
}