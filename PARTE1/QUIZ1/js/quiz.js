function somarPonto() {
  let pontos = Number (localStorage.getItem("pontos")) || 0;
  localStorage.setItem("pontos",pontos + 1);
}

console.log("quiz.js carregado!!!")
