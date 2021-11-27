function mostrar(){
    resul.innerHTML = ''
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo= Number(document.querySelector('input#passo').value) // Esta retornando str
    var resul = document.querySelector('div#resul')
    if (passo == 0){
        alert('Passo deve ser diferente de 0!')
        

    } else {
        //alert(typeof(inicio)+  typeof(fim) + typeof(passo))
        if (inicio < fim){    
            resul.innerHTML = 'Inicio: '
            for (c = inicio;c <= fim;c +=passo){
                resul.innerHTML += `${c},  `
            } // End For
        } else {
            for (c= inicio; c >= fim; c-= passo){
                resul.innerHTML += `${c}, `
            } // end For
        } // end else

        resul.innerHTML += 'FIM'
    } // End else

}// End função mostrar() 
/*
var str = ''
for (c = 0;c <= 20;c+=3){
    console.log(str)
    str += `${c}`


}*/