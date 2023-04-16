
function contar(){
let ini = document.getElementById('ini')
let fim = document.getElementById('fim')
let pas = document.getElementById('pas')
let res = document.getElementById('res')

if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = "Impossível Contar"
 } else {
    res.innerHTML = 'Contando:  '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if(p <= 0 ){
        window.alert("Passo Inválido! CONSIDERANDO PASSO 1")
        p = 1
    }
    if(i < f) {
        //Contagem Crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}` 
       }
    } else {
        //Contagem Regressiva
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}` 
        } 
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
