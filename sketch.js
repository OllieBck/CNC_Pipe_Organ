var x = 0;
var dir = 10;

function setup(){
  createCanvas(1080, 720);
}

function draw(){
  background(0);
  if (x > 1080){
    dir = -10;
  }
  if (x < 0){
    dir = 1;
  }
  x = x + dir;
  fill(255);
  ellipse(x, 100, 20);
}
