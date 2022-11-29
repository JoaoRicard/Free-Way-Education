//variaveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let linguaguem = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){ 
  yAtor -= 3;
}
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }  
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
        if(meusPontos <= 0){
          
        }
        console.log("QUE PENA, você parou no tempo, esqueceu uma linguagem!")
      }
    }
  }
      //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
}
  
  function voltaAtorParaPosicaoInicial(){
    yAtor = 366;
  }

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240,60))
  text(meusPontos, width / 5, 27);
  
}
function marcaPonto(){
  if (yAtor < 20){ 
    meusPontos += 1;
    console.log("PARABÉNS, você aprendeu uma linguagem!!!")
      
    somDoPonto.play();

    voltaAtorParaPosicaoInicial();
  }
  if(meusPontos >= 1){
    image(linguagem1, lingCompr1, 366, 30, 30)
  }
  if(meusPontos >= 2){
  image(linguagem2, lingCompr2, 366, 30, 30);
  }
  if(meusPontos >= 3){
  image(linguagem3, lingCompr3, 357, 60, 60);
  }
  if(meusPontos >= 4){
  image(linguagem4, lingCompr4, 366, 30, 30);
    console.log("PARABÉNS! Com mais 6 pontos você se forma.")
  }
  if(meusPontos >= 5){
  image(linguagem5, lingCompr5, 366, 30, 30);
  }
  if(meusPontos >= 6){
  image(linguagem6, lingCompr6, 366, 30, 30);
  }
  if(meusPontos >= 7){
  image(bancoDeDados1, lingCompr7, 366, 30, 30);
  }
  if(meusPontos >= 8){
  image(bancoDeDados2, lingCompr8, 357, 50, 50);
  }
  if(meusPontos >= 9){
  image(service1, lingCompr9, 366, 30, 30);
  }
  if(meusPontos >= 10){
  image(framework1, lingCompr10, 374, 20, 20);
  }
  if(meusPontos == 10){
  image(certificado, 30, 50, 430, 300);
  console.log("PARABÉNS, você acabou de se formar na Alura. Este é seu certificado!!!")
//  somDeVitoria.play();
  }    
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
 
}

function podeSeMover(){
  return yAtor < 366;
}