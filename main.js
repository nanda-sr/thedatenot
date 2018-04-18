var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');
//ctx.fillRect(0, 0, canvas.width, canvas.height);

//CLASSES
function Board (){
  this.x = 0 ;
  this.y = 0 ;
  this.width = canvas.width; 
  this.height = canvas.height;
  this.img = new Image();
  this.img.src = "resources/bg-1.png"
  this.score = 0;
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
  this.y = canvas.height - 100;
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
   this.y--;
   ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
   //if (this.y < 0 || this.y > canvas.height-120) gameOver();
this.speedY *= this.friction;
this.y += this.speedY;
this.speedX *= this.friction;
this.x +=  this.speedX;
if (this.y === 775)this.y<=775




  }
this.move = function (){
  if (this.speedY > this.speed) {
    this.speedY--;
}
}
this.moveLeft = function(){
  if (this.speedX > -this.speed){
    this.speedX--;
  }
}
this.moveRight = function(){
  if (this.speedX > -this.speed){
    this.speedX++;
  }
}
}



function Step(type, x){
  this.x=x;
  this.y= 10;
  this.widht=75;
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
  ctx.drawImage (this.img ,this.x, this.y, this.widht, this.height);
}
}

function Rebecca(){
  this.x= 175;
  this.y = 240;
  this.width= 150;
  this.height = 300;
  this.img = new Image ();
  this.img.src = "resources/rebecca.png";
  this.img.onload = function(){
    this.draw();
  } .bind(this);
} this.draw = function (){
  ctx.drawImage (this.img, this.x, this.y, this.width, this.height);
}


//declaraciones
var board = new Board();
var mrJeffers = new Jeffers();
var randomObstacle = ["resources/obstacle-easy.png", "resources/worm-obst.png", "resources/grassg-obstacle.png",
 "resources/cloud-obst.png", "resources/mush-obst.png"];
var obst= [];


var interval, interval1;
var frames = 0;

//AuxFunctions
function drawObstacles (){
  obst.forEach(function(obstacle){
    obstacle.draw();
  });
}
function generateSteps (){
  if (frames % 70 === 0){
    var type = Math.floor(Math.random ()*randomObstacle.length);
    var x = Math.floor(Math.random()* canvas.width);
    console.log()
    obst.push(new Step(type,x));
  
  }
  }
function gameOver(){
  pauseGame();
    ctx.font = "120px courirer"
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 8;
    ctx.strokeText("Game Over", 50, 200);
}
//Validation Functions
/*function checkCollition (){
  obst.forEach(function(obstacle){
    if(mrJeffers.isJumping(obstacle)) gameOver();
  });
}*/

//MainFunctions

function update (){
  frames++; 
  ctx.clearRect (0,0, canvas.width, canvas.height);
  board.draw();
  drawObstacles();
  mrJeffers.draw();
  console.log('obstacles: ', obst.length);
  board.drawScore();
 
  //checkCollition();
  
}

function beginGame(){
  if (interval > 0) return;
  interval = setInterval (function(){
    update();
   generateSteps();
  
  }, 1000/60);
}
function pauseGame(){
  clearInterval(interval);
  interval= 0;
}






//listeners
window.onload = function (){
  document.getElementById('start').onclick = function(){
    beginGame ();
  }
  document.getElementById('stop').onclick = function(){
    pauseGame();
  }
}


addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 37:
   mrJeffers.moveLeft(); 
    break;
    case 32:
   mrJeffers.move();
    break;
    case 39:
   mrJeffers.moveRight();
    break;
  }
});