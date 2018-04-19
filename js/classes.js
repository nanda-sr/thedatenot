var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');

function Board (){
  this.x = 0 ;
  this.y = 0 ;
  this.width = canvas.width; 
  this.height = canvas.height;
  this.img = new Image();
  this.img.src = "resources/bg-1.png"
  this.score = 0;
  this.music = new Audio ();
  this.music.src = "resources/background-music.mp3";
  this.img.onload = function (){
    this.draw();
  }.bind(this);
  this.move = function(){
   this.y--;
    if (this.y< - canvas.height) this.y = 0;
  }
  this.draw = function (){
    this.move();
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  ctx.drawImage(this.img, this.x, this.y + canvas.height, this.width, this.height )
}
this.drawScore = function(){
  this.score = Math.floor (frames / 60);
  ctx.font = "50px Avenir";
  ctx.fillStyle = "purple";
  ctx.fillText(this.score, this.width - 400, 50);
};
}

function Jeffers(){
  this.x = 250;
  this.y = canvas.height - 150;
  this.width = 80;
  this.height = 120;
  this.speed = 2;
  this.speedY = 0;
  this.speedX= 0;
  this.friction  = 0.98
  this.img = new Image();
  this.img.src = "resources/mr-jeffers.png"
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function (){
   ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
this.speedY *= this.friction;
this.y += this.speedY;
this.speedX *= this.friction;
this.x +=  this.speedX;
if (this.x === 0 || this.x === 500) this.x <=500;  
if (this.y === 0) this.y += 5;

  if (this.y > 775){
    this.y <= 775 
  }else if (this.y <= 5){
    this.y === 5;
  }
  }
this.move = function (){
  if (this.speedY > this.speed) {
    this.speedY--;
}
}
this.moveLeft = function(){
  if (this.speedX > - this.speed){
    this.speedX--;
  }
}
this.moveRight = function(){
  if (this.speedX < this.speed){
    this.speedX++;
  }
}
this.isTouching = function(obstacle){
  return (this.x < obstacle.x + obstacle.width)&&
         (this.x + this.width > obstacle.x)&&
         (this.y < obstacle.y + obstacle.height)&&
         (this.y + this.height > obstacle.y );
  }
}


//(this.y < obstacle.y + obstacle.height)

function Step(type, x){
  this.x=x;
  this.y= 10;
  this.width=75;
  this.height=15;
  this.img = new Image ();
  this.img.src = randomObstacle[type];  
  this.img.onload = function (){
    this.draw();
  }.bind(this);
this.move= function(){
  this.y ++;
}
this.draw = function (){
  this.move();
  ctx.drawImage (this.img ,this.x, this.y, this.width, this.height);
}
}

function Rebecca(){
  this.x= 120;
  this.y = 240;
  this.width= 300;
  this.height = 350;
  this.img = new Image ();
  this.img.src = "resources/rebecca.png";
  this.music = new Audio ();
  this.music.src = "resources/upsis.mp3"
 this.draw = function (){
  ctx.drawImage (this.img, this.x, this.y, this.width, this.height);
}
}
function Charachter (element,y){
  this.x = 0;
  this.y = y;
  this.width = 100;
  this.height = 150;
  this.img = new Image();
  this.img.src = randomCharacter[element];
  this.img.onload = function (){
    this.draw();
  }.bind(this);
    this.draw = function (){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}