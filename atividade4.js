function ordemDecrescente() {
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        let num = parseInt(prompt('Digite um numero:'))       
        numeros.push(num);
    }
    numeros.sort(
        function(a,b) {
            return b-a
        }
    )
    alert("Números em ordem decrescente:" + numeros[0] + "-" +numeros[1] + "-" + numeros[2] + "-" + numeros[3])
}