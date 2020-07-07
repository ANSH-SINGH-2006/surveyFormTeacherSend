var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var ww;


function preload() {
  img=loadImage("images/im.gif")
  d=loadImage("images/rr.jpg")
}

function setup(){
  canvas = createCanvas(1200,800);
 // ww=createSprite(800,520,400,400)
  database = firebase.database();
  console.log(database);
  //game = new Game();
  //game.getState();
  //game.start();
  
 
}


function draw(){
  background(d)
  form = new Form()
      form.display();
      
      //img=new Image(500,520)
      //img.display();
      image(img,500,400)
}
