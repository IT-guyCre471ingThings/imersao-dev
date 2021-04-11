var operacao = prompt('Digite uma opção: 1-soma; 2-subtração; 3-divisão; 4-multiplicação; 5-potenciação; 6-raíz quadrada');

if (operacao == '6') {
  var numero = parseInt(prompt('Digite um número:'));
  var raiz = Math.sqrt(numero);
  document.write("<h2> V" + numero +  "' = " + raiz + "</h2>");
}
else if (operacao == '5') {
  var base = parseInt(prompt('Digite o valor da base:'));
  var potencia = parseInt(prompt('Digite o valor da potência:'));
  var pot = base ** potencia;
  document.write("<h2>" + base + "^" + potencia + " = " + pot + "</h2>");
}
else {
  var primeiroValor = parseInt(prompt('Digite o primeiro valor:'));
  var segundoValor = parseInt(prompt('Digite o segundo valor:'));

  if (operacao == '1') {
    resultado = primeiroValor + segundoValor;
    document.write("<h2>" + primeiroValor + " + " + segundoValor +   " = " + resultado + "</h2>");
  }
  else if (operacao == '2') {
    resultado = primeiroValor - segundoValor;
    document.write("<h2>" + primeiroValor + " - " + segundoValor +   " = " + resultado + "</h2>");
  }
  else if (operacao == '3') {
    resultado = primeiroValor / segundoValor;
    document.write("<h2>" + primeiroValor + " / " + segundoValor +   " = " + resultado + "</h2>");
  }
  else if (operacao == '4') {
    resultado = primeiroValor * segundoValor;
    document.write("<h2>" + primeiroValor + " x " + segundoValor +   " = " + resultado + "</h2>");
  }
  else if (operacao == '5') {
    resultado = primeiroValor ** segundoValor;
    document.write("<h2>" + primeiroValor + " ^ " +                   segundoValor + " = " + resultado + "</h2>");
  }
  else {
    document.write("<h2>Opção inválida</h2>");
  }
}