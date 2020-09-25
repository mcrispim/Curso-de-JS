function contar() {
    var start = window.document.getElementById('start').value;
    var end = window.document.getElementById('end').value;
    var step = window.document.getElementById('step').value;
    var res = window.document.getElementById('res');
    
    if (start === "" || end === "" || step === "") {
        res.innerHTML = "Impossível contar!";
    } else {
        var n_start = Number(start);
        var n_end = Number(end);
        var n_step = Number(step);
        if (n_step === 0) {
            window.alert("Passo inválido. Utilizando passo 1.");
            n_step = 1;
        }
        var resultado = "";
        for (let i = n_start; i <= n_end; i += n_step) {
            resultado = resultado + String(i) + '&#1f449' 
        }
        res.innerHTML = resultado
        }
}