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
  
}

function beginGame(){
  if (interval > 0) return;
  interval = setInterval (function(){
    update();
   generateSteps();
   initialJumping();
   generateCharachters();
  }, 1000/60);
}
function pauseGame(){
  clearInterval(interval);
  interval= 0;
}






//listeners
