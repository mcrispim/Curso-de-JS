function calcular() {
    var numero = document.getElementById('numTxt');
    var res = document.getElementsByTagName('option')

    if (numero.value === "") {
        window.alert('É necessário um número para calcular a tabuada!');
        return
    } 
    var n = Number(numero.value);
    if (n <= 0 || n >= 10) {
        window.alert('O número deve ser entre 1 e 9!');
        return
    }
    for (let i = 1; i <= 10; i++) {
        res[i - 1].innerHTML = `${n} x ${i} = ${n * i}`
    }
}