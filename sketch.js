
function setup() {
  createCanvas(400,400);
}

function draw(){
background("white");

if(keyDown("right")){
  background("red");
}
if(keyDown("left")){
  background("green");
}
if(keyDown("up")){
  background("yellow");
}
if(keyDown("down")){
  background("black");
}
drawSprites();

}