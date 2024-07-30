function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Fullyear pega o ano atual com 4 dígitos
    var fano = window.document.getElementById('txtano') // Formulário com o ano que vem do HTML
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) { // Se o valor escrito do ano possuir 0 dígitos ou se for acima do ano atual
        window.alert('ERRO - Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Sempre utilizar BYNAME e não BYTAGNAME
        var idade = ano - Number(fano.value) // A idade será a variável ano menos o valor do fano (ano de nascimento digitado)
        var genero = ''
        var img = document.createElement('img') // Neste campo estamos criando um elemento 'img' e atribuindo a ele um id de nome 'foto'
        img.setAttribute('id', 'foto') // É como se criassemos no HTML, todavia, desta maneira estamos criando diretamente no JS

        // No campo abaixo [0] significa a primeira opção do meu radsex sendo Masculino, e [1] a segunda opção, feminino

        if(fsex[0].checked){ // Se for 0 atribuir masculino
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'images/criançamenino.jpg') // Atribuindo a imagem utilizando 

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'images/jovemmenino.jpg')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'images/adultohomem.jpg')

            } else {
                // idoso
                img.setAttribute('src', 'images/idosohomem.jpg')
            }

        } else if (fsex[1].checked){ // Se for 1 atribuir feminino
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'images/criançamenina.jpg')

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'images/jovemmenina.jpg')

            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'images/adultamulher.jpg')

            } else {
                // idosa
                img.setAttribute('src', 'images/idosamulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}