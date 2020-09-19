function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txt_ano')
    var res = document.getElementById('res')
    if (f_ano.value.length === 0 || f_ano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var f_sex = document.getElementsByName('rad_sex')
        var idade = ano - Number(f_ano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var imgs = document.getElementsByTagName('img')
        if (imgs.length === 0) {
            var img = document.createElement('img')
        } else {
            var img = imgs[0]
        }
        img.setAttribute('id', 'foto')
        if (f_sex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'criança_homem.png')
            } else if (idade >= 10 && idade < 20) {
                // JOVEM
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade >= 20 && idade < 60) {
                // ADULTO
                img.setAttribute('src', 'normal_homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'criança_mulher.png')
            } else if (idade >= 10 && idade < 20) {
                // JOVEM
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade >= 20 && idade < 60) {
                // ADULTO
                img.setAttribute('src', 'normal_mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa_mulher.png')
            }
        }
        res.appendChild(img)
    }
}