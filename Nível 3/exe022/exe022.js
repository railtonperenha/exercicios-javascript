function contar () {
    let result = document.getElementById('result');

    result.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    let cont = 1;
    while(cont <= 10) {
        if (cont % 2 == 0) {
            result.innerHTML += `<mark>${cont}</mark> &#x1F449; `
        } else {
            result.innerHTML += `<mark>${cont}</mark> &#x1F449; `
        }

        cont ++;
    }
    result.innerHTML += ` &#x1F3C1;`;
}