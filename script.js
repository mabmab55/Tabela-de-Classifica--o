function criarJogador() {
  var input = document.getElementById("nome");
  var nome = input.value;

  var jogadorCriado = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };

  jogadores.push(jogadorCriado);
  criarTabela(jogadores);
  input.value = "";
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  jogador.pontos = pontos;
}

var jogadores = [];

function criarTabela(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>';
    html +=
      '<td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>';
    html +=
      '<td><button onClick="adicionarDerrota(' +
      i +
      ')">Derrota</button></td></tr>';

    //x += y is shorthand for x = x + y
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  calculaPontos(jogador);
  criarTabela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  calculaPontos(jogador);
  criarTabela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  criarTabela(jogadores);
}
