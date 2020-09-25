function contar() {
    var start = Number(window.document.getElementById('start'));
    var end = Number(window.document.getElementById('end'));
    var step = Number(window.document.getElementById('step'));
    var res = window.document.getElementById('res');
    
    var resultado = ""
    for (let i = start; i <= end; i += step) {
        resultado = resultado + String(i) + ' ... ' 
    }
    res.innerHTML = resultado
}