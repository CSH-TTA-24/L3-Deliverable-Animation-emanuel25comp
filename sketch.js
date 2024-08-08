let yPos = 25;
let r = 0;
let g = 0;
let b = 0;
let xPos = 250;
let yspeed = 1;

function setup() {
  createCanvas(500, 500);
  background(0);
}
function draw(){
 
  background(0,20)
  ellipse(xPos,yPos,50,50)

  yspeed*=1.01;
  yPos+= yspeed;
  if(yspeed>30){
    yspeed=30
  }
  if (yPos > 525) {
    yPos = -25;
  }
}

  

function mouseClicked(){
  background(0, 20);
  speed=1
  yPos = 25
  xPos = random(0,500);
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  fill(r, g, b);
  
  ellipse(xPos, yPos, 50, 50);
  
  
}