var backImage,backgr;
var Nobita,Nobita_running;
var ground,invisibleGround,ground_Img;

var CakeGroup, Doracake_Img;
var ObstacleGroup, Mouse_Img;

var Friend , Friend_Img;

var gameOver;
var score;

function preload(){
  
  backImage=loadImage("jungle.png");
  
  Nobita_running=loadAnimation("N1.png","N2.png");
  
  Doracake_Img = loadImage("Doracake.png");
  Mouse_Img = loadImage("mouse.png");
  
  Friend_Img = loadImage("Shizuka.png");
   
 }


function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(100,150,800,400);
  backgr.addImage(backImage);
  backgr.scale=2.0;
  backgr.velocityX=-4;
  
  Nobita=createSprite(100,340,20,50);
  Nobita.addAnimation("running", Nobita_running);
  Nobita.scale=0.1;
 
  invisibleGround = createSprite(400,390,800,10);
  invisibleGround.visible = false;
  
  CakeGroup = new Group();
  ObstacleGroup = new Group();
  
  Nobita.setCollider("rectangle",0,0, Nobita.width, Nobita.height);
  
  
  score=0;
}
  
function draw() {

  background(255);
 
  if(backgr.x<0){
    backgr.x=backgr.width/2;
  }
  
 switch(score){
      case 10:  Nobita.scale=0.12;
              break;
      case 20:  Nobita.scale=0.14;
              break;
      case 30:  Nobita.scale=0.16;
              break;
      case 40:  Nobita.scale=0.18;
              break;
      default:break;
  }
   
  if(keyDown("space") &&  Nobita.y>=100) {
     Nobita.velocityY = -12;
  } 
  
   Nobita.velocityY =  Nobita.velocityY +0.8;
  
   Nobita.collide(invisibleGround);
  
 
 
  spawnCake();
  spawnObstacle();
  spawnShizuka();
  
  if(ObstacleGroup.isTouching( Nobita)) {
         Nobita.scale=0.08;
      }
  
  if(CakeGroup.isTouching( Nobita)){
     Nobita.scale=0.1;
    CakeGroup.destroyEach();
    score=score +2;
  }
 drawSprites(); 

stroke("red");
textSize(20);
fill("red");
text("Score:" +score, 500,50);
}

   function spawnCake() {
    if (frameCount % 80 === 0) {
    var Doracake = createSprite(800,250,40,10);
    Doracake.y = random(120,200);
    Doracake.addImage(Doracake_Img);
    Doracake.scale = 0.2;
    Doracake.velocityX = -5;
    Doracake.lifetime = 300;
    Nobita.depth=Doracake.depth +1;
    CakeGroup.add(Doracake);
    }
    }
  
     function spawnObstacle(){
   if (frameCount % 300 === 0){
   var Mouse= createSprite(800,350,10,40);
   Mouse.velocityX = -6;
   Mouse.addImage(Mouse_Img);
   Mouse.scale = 0.2;
   Mouse.lifetime = 300;
   Nobita.depth=Mouse.depth+1;
   ObstacleGroup.add(Mouse);
    }
     }
 function spawnShizuka(){
   if (frameCount % 20000 === 0){
   var Shizuka= createSprite(800,350,10,40);
   Shizuka.velocityX = -6;
   Shizuka.addImage(Friend_Img);
   Shizuka.scale = 0.2;
   Shizuka.lifetime = 300;
   Nobita.depth=Shizuka.depth+1;
   
   }
    
     }

