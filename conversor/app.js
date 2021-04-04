function converter() {
    var valueDolar = document.getElementById("valueinput").value
    var valueReal = (parseFloat(valueDolar) * 5.5).toFixed(2)
  
    document.getElementById("resultado").innerHTML =
      "O valor convertido de Dolar U$ para Real R$ é: " + "R$" + valueReal.replace(".", ",")
  }