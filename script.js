const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const reset = document.getElementById('btn-reset')
const tela = document.getElementById('tela')

let contagem = 0

btn1.addEventListener("click", function() {
    contagem++
    tela.textContent = `Cliques: ${contagem}`
})

btn2.addEventListener("click", function() {
    contagem--
    tela.textContent = `Cliques: ${contagem}`
})

reset.addEventListener("click", function() {
    contagem = 0
    tela.textContent = `Cliques: ${contagem}`
})