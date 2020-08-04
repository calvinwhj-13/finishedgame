var form;
var player;
var object;
var enemy1,enemy2,enemy3,enemy4;
var edges;
var playermove;
var playerani;
var deathani;
var bgimg;
var objimg;
var atani;
var form;
var gameover;
var goimg;
var still;

function preload() {
  playerani = loadAnimation("sprites/playercharacters/tile000.png","sprites/playercharacters/tile003.png","sprites/playercharacters/tile000.png","sprites/playercharacters/tile006.png","sprites/playercharacters/tile009.png","sprites/playercharacters/tile012.png","sprites/playercharacters/tile000.png");
  bgimg = loadImage("sprites/floor.png");
  objimg = loadImage("sprites/tile000.png");
  enemyani = loadAnimation("sprites/enemyanimation/tiles/1/tile000.png","sprites/enemyanimation/tiles/1/tile001.png","sprites/enemyanimation/tiles/1/tile002.png","sprites/enemyanimation/tiles/1/tile006.png","sprites/enemyanimation/tiles/1/tile005.png","sprites/enemyanimation/tiles/1/tile004.png","sprites/enemyanimation/tiles/1/tile003.png","sprites/enemyanimation/tiles/1/tile004.png","sprites/enemyanimation/tiles/1/tile005.png","sprites/enemyanimation/tiles/1/tile006.png");
  deathani = loadAnimation("sprites/playercharacters/tile051.png");
  atani = loadAnimation("sprites/playercharacters/tile012.png","sprites/playercharacters/tile003.png","sprites/playercharacters/tile004.png","sprites/playercharacters/tile005.png","sprites/playercharacters/tile049.png");
  goimg = loadImage("sprites/download.png");
  still = loadImage("sprites/enemyanimation/tiles/1/tile000.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgimg);
  player = new Player(displayWidth/2,displayHeight/2,10,10);
  player.sprite.addAnimation("label1",playerani);
  player.sprite.addAnimation("death",deathani);
  player.sprite.setCollider("circle",0,0,20);
  player.sprite.debug = true;
  enemy1 = new Enemy(displayWidth/4,displayHeight/4,10,10);
  enemy1.movement(2,2);
  enemy1.sprite.debug = true;
  enemy1.sprite.addAnimation("label2",enemyani);
  enemy2 = new Enemy(displayWidth/4,displayHeight/3,10,10);
  enemy2.movement(-2,-2);
  enemy2.sprite.addAnimation("label3",enemyani);
  enemy3 = new Enemy(displayWidth/3,displayHeight/4,10,10);
  enemy3.movement(-2,2);
  enemy3.sprite.addAnimation("label4",enemyani);
  enemy4= new Enemy(displayWidth/3,displayHeight/3,10,10);
  enemy4.movement(2,-2);
  enemy4.sprite.addAnimation("label5",enemyani);
  object = new Object1(100,250,5,5);
  playermove = randomVelocity();
  gameover = createSprite(displayWidth/2,displayHeight/2,200,50);
  gameover.scale = 2;
  gameover.addImage(goimg);
  gameover.visible = false;
}

function draw() {
  background("white");
  player.display();
  object.display();
  
  edges=createEdgeSprites();
  enemy1.sprite.bounceOff(edges);
  enemy2.sprite.bounceOff(edges);
  enemy3.sprite.bounceOff(edges);
  enemy4.sprite.bounceOff(edges);

  if(player.sprite.collide(object.sprite)){
    enemy1.sprite.attractionPoint(0.5,100,250);
    enemy2.sprite.attractionPoint(0.5,100,250);
    enemy3.sprite.attractionPoint(0.5,100,250);
    enemy4.sprite.attractionPoint(0.5,100,250);
  }

  if(player.sprite.collide(enemy1.sprite)||player.sprite.collide(enemy2.sprite)||player.sprite.collide(enemy3.sprite)||player.sprite.collide(enemy4.sprite)) {
    player.sprite.changeAnimation("death",deathani);
    player.velocityX = 0;
    player.velocityY = 0;
    enemy1.sprite.velocityX = 0;
    enemy1.sprite.velocityY = 0;
    enemy2.sprite.velocityX = 0;
    enemy2.sprite.velocityY = 0;
    enemy3.sprite.velocityX = 0;
    enemy3.sprite.velocityY = 0;
    enemy4.sprite.velocityX = 0;
    enemy4.sprite.velocityY = 0;
    player.sprite.restitution = 0;
    gameover.visible = true;
    enemy1.sprite.changeAnimation("a",still);
    enemy2.sprite.changeAnimation("b",still);
    enemy3.sprite.changeAnimation("c",still);
    enemy4.sprite.changeAnimation("d",still);
    
  }

  drawSprites();
}

function randomVelocity() {
  enemy1.velocityX = random(-10,10);
  enemy1.velocityY = random(-10,10);
}