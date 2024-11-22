function clicou () {
    let nome = window.prompt("Qual seu nome ?")
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = `Olá, <strong>${nome}</strong>! É um prazer conhece-lo &#x1F596;`
}