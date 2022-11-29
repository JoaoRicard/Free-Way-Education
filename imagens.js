//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let certificado;

let somDaTrilha;
let somDoPonto;
let somDaColisao;
let somDeVitoria;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-4.png");
  imagemCarro5 = loadImage("imagens/carro-5.png");
  imagemCarro6 = loadImage("imagens/carro-6.png");
  linguagem1 = loadImage("imagens/logo-javascript.png");
  linguagem2 = loadImage("imagens/logo-c-sharp.png");
  linguagem3 = loadImage("imagens/logo-python.png");
  linguagem4 = loadImage("imagens/logo-html-5.png");
  linguagem5 = loadImage("imagens/c-plus-plus.png");
  linguagem6 = loadImage("imagens/logo-java.png");
  bancoDeDados1 = loadImage("imagens/logo-mysql.png");
  bancoDeDados2 = loadImage("imagens/logo-oracle.png");
  service1 = loadImage("imagens/logo-amazon-web-services.png");
  framework1 = loadImage("imagens/logo-.net.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  certificado = loadImage("imagens/certificado-projeto.jpg");
  somDaTrilha = loadSound("sons/trilha.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDeVitoria = loadSound("sons/vitoria.mp3");
} 
  