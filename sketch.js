function setup() {
  createCanvas(500, 400);
//  if(meusPontos !== 10){
  somDaTrilha.loop();    
//  }
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  mostraLinguagem();
  movimentaCarro();
  movimentaAtor();
  voltaCarroPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}