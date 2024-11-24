function contar () {
    let result = document.getElementById('result');

    result.innerHTML = `<h2>Contando de 1 até 10</h2>`

    let cont = 1;
    while(cont <= 10) {
        result.innerHTML += ` ${cont} &#x1F449;`;
        cont ++;
    }

    result.innerHTML += ` &#x1F3C1;`;
}