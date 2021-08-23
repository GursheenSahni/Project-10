var shipimg,ship,seaimg,sea;

function preload(){
  shipimg= loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg= loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite (40,200);
  sea.addImage (seaimg);
  sea.scale=0.3;
  sea.velocityX=-5;

  ship=createSprite (130,200,30,30);
  ship.addAnimation ("ship",shipimg);
  ship.scale=0.25;

}

function draw() {
  background("black");
  sea.velocityX=-3;
  if(sea.x<0){
    sea.x=sea.width/8;

  }
  drawSprites ();
  

 
}