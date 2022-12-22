let codificar = document.getElementById("codificar")
let decodificar = document.getElementById("decodificador")
let codigo

function limparTelaResultado() {
    if (document.getElementById("inicio").style.display === "none") {
        document.getElementById("inicio").style.display = "block"
        document.getElementById("final").style.visibility = "hidden"
    } else {
        document.getElementById("inicio").style.display = "none"
        document.getElementById("final").style.visibility = "visible"
    }
}

function pegarValor() {
    let text = document.getElementById("entrada")
    codigo = text.value
    console.log(codigo)
    text.value = ""
    text.placeholder = "Digite seu texto"

}

decodificar.onclick = limparTelaResultado
codificar.onclick = pegarValor