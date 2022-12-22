/*
function limparTelaResultado() {
    document.getElementsByName("resultado").style.visibility = "hidden"
}

botao.onclick = limparTelaResultado()
*/

let botao = document.getElementById("azulEscuro")
let codigo
function pegarValor() {
    const text = document.getElementById("entrada")
    codigo = text.value
    console.log(codigo)
    text.value = ""
    text.placeholder = "Digite seu texto"
    text.focus()
}

botao.onclick = pegarValor