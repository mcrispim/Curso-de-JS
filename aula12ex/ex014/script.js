function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
/* Para testar
    var hora = 10
    var hora = 16
    var hora = 19
*/
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // bom dia
        img.src = "manha_ok.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "tarde_ok.png"
        document.body.style.background = "#b9846f"
    } else {
        // boa noite
        img.src = "noite_ok.png"
        document.body.style.background = "#515154"
    }
}
