//variaveis do carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 318];
let velocidadeCarros = [2.4, 5.1, 0.8, 2, 3.3, 1.8];
let comprimentoCarro = 80;
let alturaCarro = 40;

function mostraCarro(){
    for ( let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
function movimentaCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarroPosicaoInicial(){
  for ( let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
     xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < - 50;
}