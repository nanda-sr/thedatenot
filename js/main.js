var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');
//CLASSES
//declaraciones
//AuxFunctions
//Validation Functions
function checkCollition (){
  obst.forEach(function(obstacle){
    if(mrJeffers.isTouching(obstacle)){
      mrJeffers.y-=3;
      console.log ('yei');
    }
  });
}
function loseGame (){

  if (mrJeffers.y === canvas.height - 120) gameOver();
}


//MainFunctions





function update (){
  frames++; 
  yolo ++;
  ctx.clearRect (0,0, canvas.width, canvas.height);
  board.draw();
  drawObstacles();
  mrJeffers.draw();
 // console.log('obstacles: ', obst.length);
  board.drawScore();
  checkCollition();
  loseGame();
  
}

function beginGame(){

  console.log(board.score)
  if (interval > 0) return;
  interval = setInterval (function(){
    update();
   generateSteps();
   initialJumping();
   screenEffect();
   //restartGame();
  }, 1000/60);
  board.music.play();
}
function pauseGame(){
  clearInterval(interval);
  interval= 0;
  console.log('pause')
  board.music.pause();
}
function gameOver(){
 //board.music.pause();
 console.log("lost")
 clearInterval(interval)
 restartGame()
 setTimeout(function(){
  ctx.fillStyle = "#ccf7ff"
  ctx.fillRect (0,0, canvas.width, canvas.height);
  rebecca.draw();
    ctx.font = "60px hi-melody"
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 5;
    ctx.strokeText("Game Over", 120 , 250);
    rebecca.music.play();
}, 100)
}
function continueGame(){
  console.log(board.score)
  if (interval > 0) return;
  interval = setInterval (function(){
    update();
   generateSteps();
   initialJumping();
   screenEffect();
  }, 1000/60);
}

function restartGame(){
  interval=0;
  mrJeffers.x = 250;
  mrJeffers.y = canvas.height -150;
  frames = 0;
  yolo = 0;
  obst = [];
}





//listeners
