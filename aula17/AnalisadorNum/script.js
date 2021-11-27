// Tamanho, min, max, soma, media
// Não adicionar repetido
var lista = [] 
var resul = document.getElementById('resul')
var cont = 0 // Contador
var resulAnt = ''
var cursor = 1
function adicionar(){

    if (cursor == 1){ // Se acabou de vir do mostrar()
        cursor = 0
        resul.innerHTML = resulAnt
    }
    
    var nInput = (document.getElementById('num'))
    var n = nInput.value
    if (n.length == 0){ // Se não é numero
        alert('Por favor, informe um numero')
    // end if checa valor nulo 

    }  else { // Se é numero
        n = Number(n) 
        //
        
        if (lista.indexOf(n) == -1 || lista.length == 0){ // Retorna -1 se não estiver no array
        // Se o num não estiver na lista ainda, add OU
        // Se a lista estiver vazia, add
            
            lista.push(n) // Add (na ultima posição)
            resul.innerHTML += `O numero ${lista[cont]} foi adicionado <br>` // Mostrar o numero q foi add
            cont += 1 // Contador para o index do array lista
            
         // end if (se é valor novo)
        } else {
            alert('Valor repetido')
        
        } // end else (valor repetido)

    } // end else se é numero

    nInput.value = '' // Limpar apos add
    nInput.focus() // Deixa selecionado a caixa 

} // end função adicionar
function mostrar(){
    resulAnt = resul.innerHTML // Guarda resultado anterior do resultado
    cursor = 1
    resul.innerHTML = lista
    var strlen = `Há ${lista.length} numeros <br>` // Tamanho 

    //O JS é frescuredo, ele não aceita o array como 
    // parametro do metodo .min, para extrair os valores usar os "..." 
    var strmin = `O menor valor é ${Math.min(...lista)} <br>` // Min
    var strmax = `O maior valor é ${Math.max(...lista)} <br>` // Max
    var s = 0 // var para a soma
    for (c in lista) { // for para soma
        s += lista[c]
    }

    var strsoma = `A soma dos valores é ${s} <br>` // soma

    var strmedia = `A media dos valores é ${s / lista.length} <br>` // media

    resul.innerHTML += `<br>${strlen} ${strmin} ${strmax} ${strsoma} ${strmedia}`
    
    
    // Soma
    // Media
} // end função mostrar