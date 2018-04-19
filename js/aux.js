//AUX FUNCTIONS
function initialJumping(){
  if (yolo < 430){
    mrJeffers.y--
  }else {
    mrJeffers.y++
  }
}

function drawObstacles (){
  obst.forEach(function(obstacle){
   obstacle.draw();
  });
}
function generateSteps (){
  if (frames % 70 === 0){
    var type = Math.floor(Math.random ()*randomObstacle.length);
    var x = Math.floor(Math.random()* canvas.width -10);
    console.log()
    obst.push(new Step(type,x));
}
  }
function condition (){
  if (frames % 1000 === 0 ){
    return true;
  }else{
    return false;
  }
}

function drawCharachters(){
  charach.forEach(function(charachter){
    charachter.draw();
  });
}



function generateCharachters(){
  if (condition()) return;
  var element = Math.floor(Math.random()*randomCharacter.length);
var y = Math.floor(Math.random()*canvas.height - 10)
charach.push(new Charachter(element,y));

}



function gameOver(){
  pauseGame();
    ctx.font = "120px courirer"
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 8;
    ctx.strokeText("Game Over", 50, 200);
}