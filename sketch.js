var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista) rioImage = loadImage("sea.png");
  path=loadImage("path.png");


  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg= loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 pista=createSprite(200,200);
//adicione uma imagem para a pista
pista.addImage(path);
pista.scale=1.2;
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
pista.velocityY = -12;

//crie um sprite de menino
boy=createSprite(200,350);
//adicione uma animação de corrida para ele
boy.addAnimation("correndo",boyImg);
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;
}

function draw() {
  background(0);
  pista.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
 boy.x=mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary); 
  boy.collide(rightBoundary);

  //código para redefinir o fundo
  if(pista.y > 400 ){
    pista.y = height/2;
  }
  
  drawSprites();
}
