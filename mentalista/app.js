// alert = paraescrever em uma alerta na tela
// document.write = para escrever na tela
// console.log = para escrever no console
// while = enquanto - estrutura de repetição ou loop
// != diferente

var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while(tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute) {
    document.write("<h2>Você Acertou!</h2>")
    break
  } else if(chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if(chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  }
}
if (chute != numeroSecreto){
    document.write("<h2>" + "Você errou a resposta era " + numeroSecreto + "</h2>")
}