function descobrir() {
    let mes = prompt('Digite o mês em extenso. (ex: Julho)');
    let result = document.getElementById('result');
    let estacao;

    switch (mes.toUpperCase()){
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'Verão';
            break;

        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'Outono';
            break;

        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'Inverno'
            break;

        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'Primavera';
            break;

        default:
            estacao = 'Indefinida';
            break;
    }

    result.innerHTML = `<p>No mês de <strong>${mes}</strong>, estamos na estação de <strong>${estacao}</strong></p>`;
}