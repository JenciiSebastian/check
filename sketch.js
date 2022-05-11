var bgimage, bgimage_running;
var holy, holy_img;
var pusi, pusi_img;
var nm, name_img;
function preload(){
  //pre-load images
  bgimage_running = loadAnimation("bgimage.PNG");
  holy_img=loadImage("holy.PNG");
  name_img = loadImage("name.PNG");
  pusi_img = loadImage("pusi.PNG");
}

function setup(){
  createCanvas(1200,600);
  //create sprites here
  bgimage = createSprite(500,300,1600,1600);
 
  nm= createSprite(320, 250, 0.01, 0.02);
  pusi= createSprite(100, 300, 0.01, 0.02);

  bgimage.addAnimation("running", bgimage_running);
  nm.addAnimation("running", name_img)
  
  pusi.addAnimation("running", pusi_img);
}

function draw() {
  background("pink");
  

  
  drawSprites();
}
