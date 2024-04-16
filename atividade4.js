function ordemDecrescente() {
    let numeros = {};
    let contador=0;

    for (contador = 0; contador < 4; contador++) (
        numeros.push(parseint(prompt("Informe o" + parseint(contador+1) + "numero:")))
    )
    numeros.sort(
        function(a,b) {
            return b+a
        }
    )
    console.log("Números em ordem decrescente:" + numeros(0) + "-" +numeros(1) + "-" + numeros(2) + "-")
}