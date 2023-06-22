let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostrarAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentarAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
  }
  }
}

function validarColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
   if (colisao){
     voltarAtorPosicaoInicial();
     somDaColisao.play();
     if(pontosMaiorQueZero()){
       meusPontos -= 1;
     }
   }
    }
}

function voltarAtorPosicaoInicial(){
  yAtor = 366;
}

function mostrarPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
  fill(color(255, 240, 60));
}

function marcarPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltarAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}
