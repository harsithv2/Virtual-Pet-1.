//Create variables here
var dog,dog1
var happyDog,happyDog1
var foodS
var foodStock
var database

function preload()
{
  //load images here

  dog1=loadImage("images/dogImg.png")
  happyDog1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);
  dog=createSprite(275,400,10,10)
  dog.scale=0.2
  dog.addImage(dog1)
  //happyDog.addImage(happyDog1)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87)
text("Note: Press UP_ARROW Key To Feed Drago Milk")
fill (10)
drawSprites();
   
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
  
}
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}


