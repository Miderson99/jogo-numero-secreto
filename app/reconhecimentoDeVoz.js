const elementoChute = document.getElementById('chute')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

recognition.addEventListener("end", () => recognition.start());


function onSpeak(e) {

    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    VerificaValidacaoDoChute(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div> Você disse </div>
        <span class="box">${chute}</span>
    `
}


