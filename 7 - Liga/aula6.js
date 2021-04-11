var atletico = {
  nome: "Atlético Madrid",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var barcelona = {
  nome: "Barcelona",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
  
var real = {
  nome: "Real Madrid",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var sevilla = {
  nome: "Sevilla",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

real.pontos = calculaPontos(real);
barcelona.pontos = calculaPontos(barcelona);
atletico.pontos = calculaPontos(atletico);
sevilla.pontos = calculaPontos(sevilla);
  
function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
}
  
var jogadores = [atletico, barcelona, real, sevilla];
  
exibirJogadoresNaTela(jogadores);


function exibirJogadoresNaTela (jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaTimes");
  tabelaJogadores.innerHTML = html;
}
  
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
  
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
  
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}




// function porEmOrdemDePosicao(jogadores){
//   let memoriaJogador;
//   let memoriaPosicao;
//   for(var i=0; i < jogadores.length ; i++){
//     for(var j=i+1; j < jogadores.length; j++){
//       if(jogadores[i].pontos < jogadores[j].pontos){
//         memoriaJogador = jogadores[j];
//          jogadores[j] = jogadores[i];
//         jogadores[i] = memoriaJogador;
//       }
//     }
//   }
//   for(var i=0; i < jogadores.length; i++){
//     for(var j=i+1; j < jogadores.length; j++){
//       if(jogadores[i].posicao > jogadores[j].posicao){
//         memoriaPosicao = jogadores[i].posicao;
//         jogadores[i].posicao = jogadores[j].posicao;
//         jogadores[j].posicao = memoriaPosicao;
//       }
//     }
//   }
// }