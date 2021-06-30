var bgImg;

var spaceCraft, spaceCraftImg

var bothSideSmokeImg, leftSideSmokeImg, RightSideSmokeImg ;

var hasDocked = false

var Iss, IssImg

function preload(){

  bgImg = loadImage("Docking-undocking/spacebg.jpg")

  spaceCraftImg = loadImage("Docking-undocking/spacecraft1.png");

  bothSideSmokeImg = loadImage("Docking-undocking/spacecraft2.png")
  leftSideSmokeImg = loadImage("Docking-undocking/spacecraft3.png")
  RightSideSmokeImg = loadImage("Docking-undocking/spacecraft4.png")

  IssImg = loadImage("Docking-undocking/iss.png")

}

function setup() {

  createCanvas(800,400);

  spaceCraft = createSprite(Math.round(random(100,600)),380, 50, 50)
  spaceCraft.addImage(spaceCraftImg)
  spaceCraft.scale = 0.1

  iss = createSprite(255,230,10,10)
  iss.addImage(IssImg)
  iss.scale = 0.8

}

function draw() {
  background(bgImg);  

  console.log (spaceCraft.y)
  console.log (spaceCraft.x)


  text( "The Coordinates are - " ,550, 200)
  text(" x = 200", 550,220)
  text(" y = 290", 550,240)

 if(!hasDocked){

   if(keyDown(UP_ARROW) ){
    spaceCraft.y = spaceCraft.y - 1
    spaceCraft.addImage(bothSideSmokeImg)
   }

   if(keyDown(LEFT_ARROW) ){
     spaceCraft.x = spaceCraft.x + 1
     spaceCraft.addImage(leftSideSmokeImg)
   }

   if(keyDown(RIGHT_ARROW) ){
     spaceCraft.x = spaceCraft.x - 1
     spaceCraft.addImage(RightSideSmokeImg)
   }

 }

 if(spaceCraft.x === 200 && spaceCraft.y === 290){
   hasDocked = true
   fill("White")
   textSize(20)
   text("Docking Successfull !!!" ,200,380)
 }


  drawSprites();


}