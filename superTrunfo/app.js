var carta1 = {
    nome: "Son-Goku",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/047/large/eduardo-medeiros-prancheta-1.jpg?1565888009",
    atributos: {
        ki: 8700,
        tecnicas: 8500,
        velocidade: 85,
        tranformacoes: 7
    }
}
var carta2 = {
    nome: "Vegeta",
    imagem: "https://cdna.artstation.com/p/assets/images/images/019/993/052/large/eduardo-medeiros-prancheta-3.jpg?1565888013",
    atributos: {
        ki: 8500,
        tecnicas: 8200,
        velocidade: 85,
        tranformacoes: 5
    }
}
var carta3 = {
    nome: "Jiren",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/111/large/eduardo-medeiros-prancheta-23.jpg?1565888150",
    atributos: {
        ki: 10000,
        tecnicas: 9000,
        velocidade: 92,
        tranformacoes: 0
    }
}
var carta4 = {
    nome: "Broly",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/055/large/eduardo-medeiros-prancheta-4.jpg?1565888017",
    atributos: {
        ki: 9000,
        tecnicas: 7500,
        velocidade: 78,
        tranformacoes: 3
    }
}
var carta5 = {
    nome: "Frezza",
    imagem: "https://cdna.artstation.com/p/assets/images/images/019/993/080/large/eduardo-medeiros-prancheta-9.jpg?1565888060",
    atributos: {
        ki: 8200,
        tecnicas: 8300,
        velocidade: 77,
        tranformacoes: 5
    }
}
var carta6 = {
    nome: "Majin Boo",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/081/large/eduardo-medeiros-prancheta-10.jpg?1565888064",
    atributos: {
        ki: 8300,
        tecnicas: 9000,
        velocidade: 72,
        tranformacoes: 6
    }
}
var carta7 = {
    nome: "Goku Black",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/083/large/eduardo-medeiros-prancheta-12.jpg?1565888072",
    atributos: {
        ki: 9000,
        tecnicas: 8600,
        velocidade: 81,
        tranformacoes: 3
    }
}
var carta8 = {
    nome: "Zamasu",
    imagem: "https://cdna.artstation.com/p/assets/images/images/019/993/084/large/eduardo-medeiros-prancheta-13.jpg?1565888076",
    atributos: {
        ki: 9400,
        tecnicas: 8600,
        velocidade: 84,
        tranformacoes: 1
    }
}
var carta9 = {
    nome: "Hit",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/079/large/eduardo-medeiros-prancheta-14.jpg?1565888059",
    atributos: {
        ki: 8200,
        tecnicas: 8800,
        velocidade: 95,
        tranformacoes: 0
    }
}
var carta10 = {
    nome: "Gogeta",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/095/large/eduardo-medeiros-prancheta-16.jpg?1565888107",
    atributos: {
        ki: 9500,
        tecnicas: 9600,
        velocidade: 88,
        tranformacoes: 4
    }
}
var carta11 = {
    nome: "Vegetto",
    imagem: "https://cdna.artstation.com/p/assets/images/images/019/993/098/large/eduardo-medeiros-prancheta-17.jpg?1565888111",
    atributos: {
        ki: 9200,
        tecnicas: 9500,
        velocidade: 90,
        tranformacoes: 4
    }
}
var carta12 = {
    nome: "Shenlong",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/093/large/eduardo-medeiros-prancheta-21.jpg?1565888106",
    atributos: {
        ki: 99999,
        tecnicas: 99999,
        velocidade: 99999,
        tranformacoes: 99999
    }
}
var carta13 = {
    nome: "Toppo",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/019/993/115/large/eduardo-medeiros-prancheta-24.jpg?1565888154",
    atributos: {
        ki: 9200,
        tecnicas: 8100,
        velocidade: 78,
        tranformacoes: 0
    }
}
var carta14 = {
    nome: "Mestre Kame",
    imagem: "https://cdna.artstation.com/p/assets/images/images/019/993/102/large/eduardo-medeiros-prancheta-19.jpg?1565888119",
    atributos: {
        ki: 4000,
        tecnicas: 9100,
        velocidade: 58,
        tranformacoes: 1
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)//para retirar uma carta do jogo

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  
    var atributo = document.getElementById('escolha')
    atributo.innerHTML = "Escolha seu Atributo"
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
    exibirOpcoes()
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})` 
}

function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final"> Venceu </p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final"> Perdeu </p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final"> Empatou </p>'
    }
  if (cartas.length == 0){
    alert("Fim de Jogo, atualize a página para jogar denovo!")
    document.getElementById('btnSortear').style.display="none";
    document.getElementById('btnProximaRodada').style.display="none";
    document.getElementById('btnJogar').style.display="none";
    document.getElementById('quantidade-cartas').style.display="none";
    
    var divAtributos = document.getElementById('opcoes')
    divAtributos.innerHTML = ""
    
    var atributo = document.getElementById('escolha')
    atributo.innerHTML = ""
    
    if(pontosJogador > pontosMaquina){
      htmlResultado = '<h3 id="h3">Você venceu!</h3>'
    } else if(pontosMaquina > pontosJogador){
      htmlResultado = '<h3 id="h3">Você perdeu para a maquina!</h3>'
    } else{
      htmlResultado = '<<h3 id="h3">Empate!</h3>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').style.display="none";
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <h3>VS</h3> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnJogar').style.display = ""
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
  
  var divAtributos = document.getElementById('opcoes')
  divAtributos.innerHTML = ""
  
  var atributo = document.getElementById('escolha')
  atributo.innerHTML = ""
}