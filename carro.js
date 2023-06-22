let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadesCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostrarCarro(){
  for (let i = 0; i < imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentarCarro(){
  for (let i = 0; i < imagensCarros.length; i++){
  xCarros[i] -= velocidadesCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagensCarros.length; i++){
  if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}