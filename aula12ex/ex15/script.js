function verificar(){ // Ao apertar o botão verificar
    var anoNasc = window.document.getElementById('nasc').value // ano de nascimento do caixa de texto
    var resul = window.document.getElementById('resul') // Resultado
    var anoAtual = new Date().getFullYear() // Retorna o ano em 4 digitos
    if (anoNasc.length == 0 || anoNasc > anoAtual || anoNasc < 1800){ // Para valores invalidos
        alert('ERRO: Ano de nascimento inválido')

    } else { // Para valores válidos

        var circulos = document.getElementsByName('radsex') // 0 = M, 1 = F. Retorna todos elementos com id='radsex', no caso os circulos de marcação
        var idade = anoAtual - anoNasc // Calculo da idade
        var genero = 0
        var img = document.createElement('img') // Colocar imagem pelo JS, 1 criar o elemento do tipo img
        img.setAttribute('id', 'img') // Informando o id da tag img

        // Jeito do prof
        /*if (circulos[0].checked){  // Se o circulo de masculino estiver marcado
            genero = 'Homem'
            img.setAttribute('src', 'homem.jpg') // Add src com o arquivo da foto

        } else{ // Se o circulo de feminino estiver marcado
            genero = 'Mulher'
            img.setAttribute('src', 'mulher.jpg')
        }
        */
        // Meu jeito
        var circMas = document.getElementById('mas').checked
        if (circMas){
            genero = 'Homem'
            img.setAttribute('src', 'homem.jpg') // Add o arquivo

        }else {
            genero = 'Mulher'
            img.setAttribute('src', 'mulher.jpg')
        }
        
        resul.style.textAlign = 'center' // Alinhar no centro pelo JS
        resul.innerHTML = `Vc é ${genero} de ${idade} anos.`
        resul.appendChild(img) // Fazer a imagem aparecer
        

        
    }




}