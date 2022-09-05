const btnInjetaConteudo = document.getElementById('btn-injeta-conteudo')
btnInjetaConteudo.addEventListener('click', btnInjetaConteudoOnClick)

const app = document.getElementById('app')

/**
 * Função JavaScript
 **/
function injetaTexto(texto) {
    app.innerHTML += `${texto}<br>`
}

function btnInjetaConteudoOnClick() {
    const textoParaInjetar = document.getElementById('texto-para-injetar')
    const texto = textoParaInjetar.value
    injetaTexto(texto)
    textoParaInjetar.value = ""
}

function limparConteudo(){
   app.innerHTML = ""
}