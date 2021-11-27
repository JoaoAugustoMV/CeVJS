function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    var horario = 0 
    var hora = 7
    if (hora > 0 && hora < 12){ // Bom dia
        document.body.style.background = 'red'
        img.src = 'manha.png'
        horario = 'Bom dia!'
    } else if (hora > 12 && hora < 18){ // Boa tarde
        document.body.style.background = 'orange'
        img.src = 'tarde.png'
        horario = 'Boa tarde!'
    } else {// Boa noite
        document.body.style.background = 'gray'
        img.src = 'noite.png'
        horario = 'Boa noite!'
    }
    msg.innerHTML = `Agora são ${hora} horas.<br/>${horario}`    
}

