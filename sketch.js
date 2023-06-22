function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentarCarro();
  movimentarAtor();
  voltaPosicaoInicialCarro();
  validarColisao();
  mostrarPontos();
  marcarPontos();
}
