var car,wall,caranim;
var speed,weight;
var count;
var gameState = "play";

function setup() {
  createCanvas(1600,400);
car = createSprite(50,200,50,10);
car.addAnimation("t1",caranim);
wall = createSprite(1500,200,50,200);
count=0;
speed=0;
weight=0;

}

function preload () {

caranim = loadAnimation("CAR.png");
}

function draw() {
  background("white");  
  wall.shapeColor=80,80,80;
  textSize(28);
  fill ("black");
  text("Deformation:"+count,650,50);
 if (gameState==="play"){
  if(keyDown("space")){
  
    speed = random(55,90);
  weight = random(400,1500);
  car.velocityX=speed;
  }
  text("Press Space Test",800,250 )
  if (wall.x-car.x<wall.width/2+car.width/2&&
    car.x-wall.x<wall.width/2+car.width/2&&
    wall.y-car.y<wall.height/2+car.height/2&&
    car.y-wall.y<wall.height/2+car.height/2){
  
  
 
  gameState="end";
  
    }
  }
if (gameState==="end"){
 
  text("Press Space To Retest",800,250 )
count=0.5*weight*speed*speed/22500

car.velocityX=0;
if(count>180){

text("LETHAL!",800,200);

}
  if(count<80){

    text("GOOD!",800,200);
    
    }


 if(count>80&&count<180){

    text("Average",800,200);
    
    }
    if (keyDown("space")){
  
      reset();  
      

}
}

 
  
  drawSprites();


}

function reset(){
  car.x=50;
  car.y=200;
gameState="play";
count=0;



}