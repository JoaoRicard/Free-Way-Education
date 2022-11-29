//Definindo linguagens - imagens
let linguagem1;
let linguagem2;
let linguagem3;
let linguagem4;
let linguagem5;
let linguagem6;
let bancoDeDados1;
let bancoDeDados2;
let service1;
let framework1;

//Posição imagens linguagens
let lingCompr1 = 120;
let lingCompr2 = 150;
let lingCompr3 = 180;
let lingCompr4 = 240;
let lingCompr5 = 270;
let lingCompr6 = 300;
let lingCompr7 = 330;
let lingCompr8 = 365;
let lingCompr9 = 420;
let lingCompr10 = 460;
let lingAlt1 = 3;
let lingAlt2 = -9;
let lingAlt3 = 8;

function mostraLinguagem(){
 if(meusPontos == 0){
  image(linguagem1, lingCompr1, lingAlt1, 30, 30);
 }
  if(meusPontos == 1){
  image(linguagem2, lingCompr2, lingAlt1, 30, 30);
  }
  if(meusPontos == 2){
  image(linguagem3, lingCompr3, lingAlt2, 60, 60);
  }
  if(meusPontos == 3){
  image(linguagem4, lingCompr4, lingAlt1, 30, 30);
  }
  if(meusPontos == 4){
  image(linguagem5, lingCompr5, lingAlt1, 30, 30);
  }
  if(meusPontos == 5){
  image(linguagem6, lingCompr6, lingAlt1, 30, 30);
  }
  if(meusPontos == 6){
  image(bancoDeDados1, lingCompr7, lingAlt1, 30, 30);
  }
  if(meusPontos == 7){
  image(bancoDeDados2, lingCompr8, lingAlt2, 50, 50);
  }
  if(meusPontos == 8){
  image(service1, lingCompr9, lingAlt1, 30, 30);
  }
  if(meusPontos == 9){
  image(framework1, lingCompr10, lingAlt3, 20, 20);
  }
}