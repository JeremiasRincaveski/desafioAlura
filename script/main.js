let codificar = document.getElementById("codificar")
let decodificar = document.getElementById("decodificador")
let copiar = document.getElementById("copiar")
let codigoLimpo, codigoEmbaralhado, codigoDesembaralhado

function criptografar() {
    pegarValor()
    limparTelaResultado(embaralharCodigo())
}

function descriptografar() {
    pegarValor()
    limparTelaResultado(desembaralhaCodigo())
}

function embaralharCodigo() {
    codigoEmbaralhado = codigoLimpo.toLowerCase()
    codigoEmbaralhado = codigoEmbaralhado.replace(/e/g, 'enter')
    codigoEmbaralhado = codigoEmbaralhado.replace(/i/g, 'imes')
    codigoEmbaralhado = codigoEmbaralhado.replace(/a/g, 'ai')
    codigoEmbaralhado = codigoEmbaralhado.replace(/o/g, 'ober')
    codigoEmbaralhado = codigoEmbaralhado.replace(/u/g, 'ufat')
    return codigoEmbaralhado
}

function desembaralhaCodigo() {
    codigoDesembaralhado = codigoLimpo
    codigoDesembaralhado = codigoDesembaralhado.replace(/enter/g, 'e')
    codigoDesembaralhado = codigoDesembaralhado.replace(/imes/g, 'i')
    codigoDesembaralhado = codigoDesembaralhado.replace(/ai/g, 'a')
    codigoDesembaralhado = codigoDesembaralhado.replace(/ober/g, 'o')
    codigoDesembaralhado = codigoDesembaralhado.replace(/ufat/g, 'u')

    return codigoDesembaralhado
}

function limparTelaResultado(codigo) {
    if (document.getElementById("inicio").style.display !== "none") {
        document.getElementById("inicio").style.display = "none"
        document.getElementById("final").style.visibility = "visible"
    }
    if (codigo === "" || codigo === " ")
        document.getElementById("resultadoCodigo").value = "informe um texto"
    else
        document.getElementById("resultadoCodigo").value = codigo
}

function pegarValor() {
    let text = document.getElementById("entrada")
    codigoLimpo = text.value
    text.value = ""
    text.placeholder = "Digite seu texto"

}

function copiarTexto() {
    let texto = document.getElementById("resultadoCodigo")
    texto.select()
    texto.setSelectionRange(0, 99999)
    document.execCommand("copy")
}

copiar.onclick = copiarTexto
decodificar.onclick = descriptografar
codificar.onclick = criptografar