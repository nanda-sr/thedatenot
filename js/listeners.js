//LISTENERS 

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