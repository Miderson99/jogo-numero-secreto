function VerificaValidacaoDoChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>";
        return;
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `valor inválido: o número secrete precisa estar entre ${menorValor} e ${maiorValor}`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era: ${numeroSecreto} 
        <br>
        <button id="jogar-novamente" class="bt-jogar"> Jogar novamente  </button>

        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div> `;
        
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div> `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorOuMenorQueOPermitido(numero) {
        return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id =="jogar-novamente") {
        window.location.reload();
    }
})