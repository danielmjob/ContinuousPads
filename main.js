function tocaPAD(idElementoAudio) {
    const audio = document.querySelector(idElementoAudio);

    // Pausa o áudio que está tocando, se houver
    if (tocandoPAD) {
       pause();
    }

    audio.play();
    audioAtual = audio; // Atualiza o áudio atual
    tocandoPAD = true; // Marca que um áudio está tocando
}

function pause(idElementoAudio){
    audioAtual.pause();
    audioAtual.currentTime = 0;
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let tocandoPAD = false;
let audioAtual = null; // Variável para armazenar o áudio que está tocando

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const tomPAD = tecla.classList[1];
    const idAudio = `#som_${tomPAD}`;

    tecla.onclick = function () {
        tocaPAD(idAudio);
    }
}