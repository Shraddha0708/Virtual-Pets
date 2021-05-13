var dog,happydog,normaldog;
var database;
var foodS =0,foodstack;

function preload()
{
	
  normaldog=loadImage("dog1.png");
  happydog=loadImage("dog2.png");

}

function setup() {

	createCanvas(700,500);

  database=firebase.database();

  dog=createSprite(610,450,50,50);
  dog.addImage(normaldog);
   dog.scale=0.1;

   foodstack=database.ref('food');
   foodstack.on("value",readstack);
   foodstack.set(20);
  
   

  
}


function draw() {  
background("green");


if(keyWentDown(UP_ARROW)){
  writeStack(foodS);
  dog.addImage(happydog)
}
  drawSprites();

  textSize(21)
  fill("blue")
  stroke("blue")
  text("PRESS UP ARROW KEY FOR FEEDING YOUR PUPPY",100,150);
  text("FEEDED FOOD ="+foodS,100,250);



}

function readstack(data){
foodS=data.val();

}
function writeStack(x){
    console.log(x);
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
      food:x

}
)}
