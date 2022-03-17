let inputNota1 = document.getElementById("nota1")
let inputNota2 = document.getElementById("nota2")
let inputNota3 = document.getElementById("nota3")

let resultado = document.getElementById("resultado")

function media() {
    let nota1 = inputNota1.value
    let nota2 = inputNota2.value
    let nota3 = inputNota3.value

    let soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)
    
    console.log(soma)

    let media = soma / 3

    resultado.innerHTML = `<p>A media total das três notas foi <span>${parseFloat(media).toFixed(1)}</span></p>`
}