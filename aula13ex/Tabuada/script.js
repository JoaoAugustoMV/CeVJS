function calcular(){
    resul.innerHTML = ''
    var n = Number(document.getElementById('num').value)
    
    for(c = 0; c <= 10; c++){
        resul.innerHTML += `${c} X ${n} = ${c * n} <br>`
    }// end if

} // end calcular()