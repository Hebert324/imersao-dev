// aprendemos nessa aula que podemos adicionar varios elementos a uma variavél ao colocarmos o {} e para chamarmos esses elementos e assim: nomeDaVariavel.propriedadesDaVariavel
var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  var rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  // Se a variavel ja foi declarado podemos chama-la so com o seu nome exemplo: var nome = 1 / nome += 1 / então nome vai ser igual a 2
  rafa.pontos = calculaPontos(rafa)
  //rafa.pontos vai receber o calculaPontos antes de ele ser calculado na função pois no javascript não importa a ordem para essa variavel
  paulo.pontos = calculaPontos(paulo)
  
  //exempo: calculaPontos(rafa) "calculaPontos recebeu a variavél rafa"
  //function calculaPontos(jogador)"na função ela pegou a calculaPontos que tinha recebido rafa e trocou o seu nome por jogador"
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos //para retornar os pontos para fora da função
  }
  
  var jogadores = [rafa, paulo] // isso é uma array, tipo uma lista
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    // for e para criar um loop exemplo: for ([inicialização]; [condição]; [expressão final]){declaração} A declaração for começa declarando a variável i e inicializando-a como 0. Ela verifica se i é menor que o numero de jogadores, executa o codigo que está dentro do {} e adiciona +1 no final de cada loop.
    for(var i = 0; i < jogadores.length; i++){
      // em vez de usarmos essa função: nome = nome + 1, podemos usar esse: nome += 1.
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")// o ducment.getElmentById vai puzar no documento html um id.
    tabelaJogadores.innerHTML = html // para não aparecer so o html na pagina
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }