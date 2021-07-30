var ground, ground_;
var runner, runner_;
var coin, coin_;
var bomb, bomb_;
var drink, drink_;
var power, power_;
var lBorder, rBorder;
var score = 0;

function preload(){
  ground_ = loadImage("path.png");
  runner_ = loadAnimation("Runner-1.png", "Runner-2.png");
  coin_ = loadImage("coin.png");
  bomb_ = loadImage("bomb.png");
  drink_ = loadImage("energyDrink.png");
  power_ = loadImage("power.png")
}

function setup(){
  createCanvas(300, 400);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill("white");
  ground = createSprite(150, 200);
  ground.addImage("ground", ground_);
  ground.velocityY = 10;
  runner = createSprite(150, 350);
  runner.addAnimation("runner", runner_);
  runner.scale = 0.06;
  coin = createSprite(random(50, 250), random(-50, -300));
  coin.addImage("coin", coin_);
  coin.scale = 0.6;
  coin.velocityY = 10;
  bomb = createSprite(random(50, 250), random(-100, -600));
  bomb.addImage("bomb", bomb_);
  bomb.scale = 0.1;
  bomb.velocityY = 10;
  drink = createSprite(random(50, 250), random(-200, -800));
  drink.addImage("drink", drink_);
  drink.scale = 0.1;
  drink.velocityY = 10;
  power = createSprite(random(50, 250), random(-2000, -8000));
  power.addImage("power", power_);
  power.scale = 0.2;
  power.velocityY = 10;
  power.velocityX = random(-1, 1);
  lBorder = createSprite(-1, 200, 1, 400);
  lBorder.visible = false;
  rBorder = createSprite(300, 200, 1, 400);
  lBorder.visible = false;
}

function draw() {
  background(0);
  if (ground.y > 320) {
    ground.y = 200;
  }
  if (coin.y > 450) {
    coin.x = random(50, 250);
    coin.y = random(-50, -300);
  }
  if (coin.isTouching(runner)) {
    score++;
    coin.x = random(50, 250);
    coin.y = random(-50, -300);
  }
  if (bomb.y > 450) {
    bomb.x = random(50, 250);
    bomb.y = random(-100, -600);
  }
  if (bomb.isTouching(runner)) {
    score = score - 5;
    bomb.x = random(50, 250);
    bomb.y = random(-100, -600);
  }
  if (drink.y > 450) {
    drink.x = random(50, 250);
    drink.y = random(-200, -800);
  }
  if (drink.isTouching(runner)) {
    score=score+4;
    drink.x = random(50, 250);
    drink.y = random(-200, -800);
  }
  if (power.y > 450) {
    power.x = random(50, 250);
    power.y = random(-2000, -8000);
    power.velocityX = random(-1, 1);
  }
  if (power.isTouching(runner)) {
    score=score+10;
    power.x = random(50, 250);
    power.y = random(-2000, -8000);
    power.velocityX = random(-5, 5);
  }
  runner.x = mouseX;
  power.bounceOff(lBorder);
  power.bounceOff(rBorder);
  runner.collide(lBorder);
  runner.collide(rBorder);
  power.velocityY = 10;
  console.log(power.x);
  console.log(power.y);
  drawSprites();
  text(score, 150, 50)
}
