function analise () {
    let meses = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab');
    let agora = new Date;
    let result = document.getElementById('result');
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();
    let sem = agora.getDay();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundos = agora.getSeconds();

    result.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`;
    result.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`;
    result.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    result.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`;
    result.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    result.innerHTML += `<p>Minutos: <mark>${minuto}</mark></p>`;
    result.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`;
}