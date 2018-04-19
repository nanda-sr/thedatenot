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


function drawCharachters(){
  charach.forEach(function(charachter){
    charachter.draw();
  });
}





/*function generateCharachters(){
  var element = Math.floor(Math.random()*randomCharacter.length);
var y = Math.floor(Math.random()*canvas.height - 10)
charach.push(new Charachter(element,y));

}*/



