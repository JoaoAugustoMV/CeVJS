/*function ParImpar(n){
    if (n % 2 == 0){
        return 'par'
    // end if
    } else{
        return 'impar'
    } // end else
} // end função par ou impar
console.log(ParImpar(324))

function soma(n1, n2=10){ //
    return n1 + n2
}
console.log(soma(1))

var f = function(x){ // Atribuindo um função a uma variavel
    return x**3
}
console.log(f(9))
*/
function fatorial(n){
    //console.log(`n * (n-1) = ${n * (n-1)}`)
    //console.log('++')
    if (n == 1){
        return 1
    } else{
        //console.log(n * fatorial(n-1))
        //console.log('--')
        return n * fatorial(n-1)
    }
}
//console.log((fatorial(5))