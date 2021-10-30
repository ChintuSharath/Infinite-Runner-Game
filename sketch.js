var horse,horse_running

var score 

function preload(){
horse_running=loadAnimation("HorseRun1.png","HorseRun2.png")
ground_down=loadImage("GRound.png")
}

function setup() {
 createCanvas(600,200);
 edges=createEdgeSprites()

    horse=createSprite(50,100,20,50);
    horse.addAnimation("running",horse_running)
    horse.scale=0.5

    ground=createSprite(200,230,40,2);
    ground.addImage("ground",ground_down)
    ground.x=ground.width/2

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
    
    score = 0;
}

function draw() {
    background("white")
   
    text("Score: "+ score, 500,50);
      
    ground.velocityX = -(4+3*score/200)

    score = score + Math.round(frameCount/60);
     
    if(ground.x<0){
        ground.x=ground.width/2
    }
           

    if(keyDown("space")&& horse.y>=160){
        horse.velocityY=-10;
    }
        
  horse.velocityY=horse.velocityY+0.5
  horse.collide(invisibleGround);

    drawSprites();
}