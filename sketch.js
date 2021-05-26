var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation,cityAnimation;
var school;


function preload()
{
 carAnimation1=loadAnimation("images/car1.png");
 carAnimation2=loadAnimation("images/car2.png");
 playerAnimation=loadAnimation("images/player-03.png");
 logAnimation=loadAnimation("images/log2.png");
cityAnimation1=loadAnimation("image/city1.png");
cityAnimation2=loadAnimation("image/city2.png");
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
   
city=createSprite(width/2,-1500);
city.addAnimation("city",cityAnimation);
}

function draw() {
  background("skyblue");

  if(city.isTouching(player.spt)){
    gameState = "win";
  }
  
if(gameState === "win")
{
  stroke("Green");
  fill("Green");
  textSize(40);
  text("Congratulations! You Made It.",width/2-250,-1700);
  carGroup1.destroyEach();
  logGroup1.destroyEach();
}

    for (var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
   var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)  
    road.shapecolor="black";(0)
    }
    bottomGrass1.shapecolor="grey";
  }
  
  for(var i = 0; i < 40; i++){
    cars = new car(2);
    carGroup1.add(cars.spt);
  }
  
if(carGroup1.isTouching(player.spt)){
  player.spt.x = width/2;
  player.spt.y = height-75;
}



  
  for(i=1;i<logGroup1.length;1++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;  
    }
  } 
 
if(logGroup1.isTouching(player.spt)){
  player.spt.x=player.spt.x-3;
}
else if(player.spt.y > height-1550 && player.spt.y < height-1300)
       (player.spt.y < height-500 && player.spt > height-850)||
       (player.spt.y>height)||
       (player.spt.x<0)||
       (player.spt.x>width)
      
       player.sp.x = width/2;{
       player.spt.y = height-75;
       }       


  
drawSprites();
 

function keyPressed(){
  if(keycode ==  UP_ARROW){
    player.move(0,-2);
  }else if(keycode == DOWN_ARROW){
   player.move(0,2);
}else if(keycode == LEFT-ARROW){
  player.move(-2,0);
}else if(keycode == RIGHT-ARROW){
  player.move(2,0);
}
}

translate(0,-player.spt.y+height-150);

}

