function parImpar (){
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (!isNaN(numero)) {
     
        if (numero % 2 === 0) {
            numero++;
            
            alert("O número digitado par, virou ímpar: " + numero);
        } else {
            numero--; 
            alert("O número digitado impar, virou par: " + numero);
        }
    } else {
        alert("Por favor, digite um número inteiro válido.");
    }
}
