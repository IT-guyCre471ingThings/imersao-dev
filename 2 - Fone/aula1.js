var resposta = document.querySelector(".resposta");

function calcular() {
    var salario = parseInt(document.querySelector("#salario").value);
    var cartao = parseInt(document.querySelector("#cartao").value);
    var boleto = parseInt(document.querySelector("#boleto").value);

    if(salario > cartao) {
        var frase = "<p>Vamos comprar no cartão.</p>";
    }
    else if(salario > boleto) {
        frase = "<p>Vamos comprar no boleto.</p>";
    }
    else {
        frase = "<p>Infelizmente está muito caro. <br>Precisaremos guardar mais dinheiro.</p>";
    }

    document.querySelector(".resposta").insertAdjacentHTML("afterbegin", frase);
}


document.querySelector("button").addEventListener("click", calcular);