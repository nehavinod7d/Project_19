var bg;
var bgImg;
var dora , doraImg;
var obstacle , starImg;
var bombs , bombImg;
var score = 0;

function preload(){
    bgImg = loadImage("images/bg.jpg");
    doraImg  =loadImage("images/dora.png");
    starImg = loadImage("images/star.png");
    bombImg = loadImage("images/bomb.png");
}

function setup() {
 createCanvas(500,400);

starGroup = new Group();
bombGroup = new Group();

 ground=createSprite(0,380,500,10);

 bg = createSprite(150,120,500,500);
 bg.addImage(bgImg);
 bg.scale = 0.5;

 dora = createSprite(120,300);
 dora.addImage(doraImg);
 dora.scale = 0.3;

dora.setCollider("circle" , 0,0, 150);
//dora.debug = true;
}

function draw() {


    bg.velocityX=-5;
  if (bg.x<2){
    bg.x=bg.width/7
  }

if (keyDown("SPACE")) {
    dora.velocityY = -2;
}

/*if (keyDown("RIGHT")) {
    dora.velocityX = 2;
}

if (keyDown("LEFT")) {
    dora.velocityX = -2;
}*/

dora.velocityY = dora.velocityY + 0.2

if (starGroup.isTouching(dora)){
    dora.velocityY = 0;
    starGroup.destroyEach();
    score = score+2;
}

if (bombGroup.isTouching(dora)){
    bombGroup.destroyEach();
    score = score-2;
}
dora.collide(ground)
star();
bomb();
drawSprites();

stroke("black");
textSize(30);
fill("black");
text("Score: " + score,350,70);

}

function star() {
    if (frameCount%200 === 0) {
        obstacle = createSprite(300,200,20,20);
        dora.y = Math.round(random(50,250));
        console.log(dora.y);
        obstacle.addImage(starImg);
        obstacle.scale = 0.4;
        obstacle.velocityX = -3;
        obstacle.lifetime = 100;
        starGroup.add(obstacle);
    }
}

function bomb() {
    if (frameCount%350 === 0) {
        bombs = createSprite(250,200,30,30);
        bombs.y = Math.round(random(10,300));
        console.log(dora.y);
        bombs.addImage(bombImg);
        bombs.scale = 0.2;
        bombs.velocityX = -1;
        bombs.lifetime = 100;
        bombGroup.add(bombs);
    }
}
