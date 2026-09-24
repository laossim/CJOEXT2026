function somarPonto() {
  let pontos = Number(localStorage.getItem("pontos")) || 0;
  localStorage.setItem("pontos", pontos + 1);
}

console.log("quiz.js carregado!!!");

function mostrarResultado() {
  let pontos = Number(localStorage.getItem("pontos")) || 0;
  let lugar = document.getElementById("resultadoFinal");

  if (lugar) {
    lugar.textContent = pontos + " de 6";
  }
}

mostrarResultado();

function zerarPontos() {
  localStorage.setItem("pontos", 0);
}
