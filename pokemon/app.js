var resposta1 = "bulbasaur"
var resposta2 = "pikachu"
var resposta3 = "squirtle"
var resposta4 = "charmander"
var mestre = "Parabéns você se tornou um mestre pokémon!"
function botao(){
  var campoNomePokemon = document.querySelector('.nomePokemon')
  var pokemonSelecionado = campoNomePokemon.value // para pegar so oque estiver escrito dentro do campoNomePokemon e não todo o html

if (pokemonSelecionado == resposta1){
    alert("Parabéns você acertou!")
  //document.querySelector('.nomePokemon').value = "Parabéns você acertou!"
  document.querySelector('.pokemons').style.backgroundImage = "url('https://cdn.dribbble.com/users/1787323/screenshots/4496050/dribbbe_pikachu-01.png?compress=1&resize=800x600')"
  document.querySelector('body').style.backgroundColor = "#FDE3A8"
 campoNomePokemon.value = ""
} else if (pokemonSelecionado == resposta2){
    alert("Parabéns você acertou!")
  document.querySelector('.pokemons').style.backgroundImage = "url('https://cdn.dribbble.com/users/1787323/screenshots/4422567/dribbbe_sqrtl-01.png?compress=1&resize=800x600')"
  document.querySelector('body').style.backgroundColor = "#B3E5FC"
 campoNomePokemon.value = ""
} else if (pokemonSelecionado == resposta3){
    alert("Parabéns você acertou!")
  document.querySelector('.pokemons').style.backgroundImage = "url('https://cdn.dribbble.com/users/1787323/screenshots/4446708/dribbbe_charmendr-01.png?compress=1&resize=800x600')"
  document.querySelector('body').style.backgroundColor = "#FFCC80"
 campoNomePokemon.value = ""
} else if (pokemonSelecionado == resposta4){
    //alert("Parabéns você se tornou um mestre pokemon")
  document.querySelector('.pokemons').style.backgroundImage = "url('https://t2.tudocdn.net/191712?w=636&h=477')"
  document.querySelector('body').style.backgroundColor = "#3F8DD6"
  document.getElementById("nome111").style.display="none";
  document.getElementById("botao1").style.display="none";
  frase.innerHTML = frase.innerHTML + mestre
  campoNomePokemon.value = ""
} else{
  alert("você errou!")
  campoNomePokemon.value = ""//para fazer com que a variavel receba nenhum valor
}
}
