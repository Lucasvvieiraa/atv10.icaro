function countdown(seconds) {
    while (seconds > 0) {
        console.log(seconds);
        seconds--;

        setTimeout(() => {}, 1000);
    }
    console.log("Lançamento!");
}

function lancamentoSoyus() {
    const tempoContagem = 10;
    console.log("Contagem regressiva iniciada!");
    countdown(tempoContagem);
}

