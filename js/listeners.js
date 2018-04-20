//LISTENERS 

window.onload = function (){
  document.getElementById('start').onclick = function(){
    beginGame ();
   $('#catbug').removeClass('catbug');
   $('#catbug').addClass('move');
   $('#cover').removeClass('cover');
   $('#cover').addClass('move2');
  }
  document.getElementById('stop').onclick = function(){
    pauseGame();
   $('#stop').toggleClass('button-change').removeClass('stop-button');
   $('#continue').toggleClass('continue-button').removeClass('button-change');
  }
  document.getElementById('continue').onclick = function (){
   continueGame();
    $('#continue').toggleClass('button-change').removeClass('continue-button');  
    $('#stop').toggleClass('stop-button').removeClass('button-change');
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


