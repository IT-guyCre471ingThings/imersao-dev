var precoDolar = parseFloat(prompt("Qual é o preço do PS5 em dólares?"));
var valorDolar = parseFloat(prompt("Quanto está o dólar em reais?"));

var precoReal = precoDolar * valorDolar;
alert("PS5 = R$" + precoReal.toFixed(2));