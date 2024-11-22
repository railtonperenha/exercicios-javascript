function clicou () {
    let now = new Date;
    let result = document.getElementById('result');
    result.innerHTML = `<p>O que eu recebi do sitema foi <mark>${now}</mark></p>`;
}