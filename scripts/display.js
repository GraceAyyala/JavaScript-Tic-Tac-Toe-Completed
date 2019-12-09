var gameBoard = [0,1,2,3,4,5,6,7,8];
var gameBoardDisplayIDs = ["zero","one","two","three","four","five","six","seven","eight"];


function makePlay(divID, n){

    //exit if spot is occupied
    if(!isSpotEmpty(n)){
      return;
    }
    else {
      document.getElementById(divID).style.backgroundImage = "url(./images/X.jpg)";
      gameBoard[n] = "X";
    }

    //player win
    if(isWinnerOrCat( "You Win!!")){
      return;
    }

    cpuPlay();

    //cpu win
    if(isWinnerOrCat( "You lose...")){
      return;
    }
}

function cpuPlay(){
  do{
    var randNum = Math.round(Math.random()*7+1,0);
  }while(isNaN(gameBoard[randNum]));

  //record play in gameBoard and display "O"
  gameBoard[randNum] = "O";
  document.getElementById(gameBoardDisplayIDs[randNum]).style.backgroundImage = "url(./images/O.jpg)";
}

function isWinnerOrCat(strMessage){
  if(isWinner()){
    document.getElementById("divDeclareWinner").innerHTML = strMessage;
    document.getElementById("btnPlayAgain").style.display = "block";
    return true;
  }
  else if(isBoardFull()){
    //display message
    document.getElementById("divDeclareWinner").innerHTML = "&#128049; Cat Game &#128049;";
    document.getElementById("btnPlayAgain").style.display = "block";
    return true;
  }

  return false;
}


function isWinner(){

      //rows
      if((gameBoard[0]==gameBoard[1] && gameBoard[0]==gameBoard[2])||(gameBoard[3]==gameBoard[4] && gameBoard[3]==gameBoard[5])||(gameBoard[6]==gameBoard[7] && gameBoard[6]==gameBoard[8]))
      {
          return true;
      }
     //columns
     else if((gameBoard[0]==gameBoard[3]&& gameBoard[0]==gameBoard[6])||(gameBoard[1]==gameBoard[4]&& gameBoard[1]==gameBoard[7])||(gameBoard[2]==gameBoard[5]&& gameBoard[2]==gameBoard[8]))
     {
        return true;
     }
     //diagonals
     else if((gameBoard[0]==gameBoard[4]&&gameBoard[0]==gameBoard[8])||(gameBoard[2]==gameBoard[4]&&gameBoard[2]==gameBoard[6]))
     {
        return true;
     }
     else
     {
        return false;
     }
}//end isWinner

function isBoardFull(){
    //check for gameBoard completely filled
    for(var i = 0; i<gameBoard.length; i++)
    {
         if(isSpotEmpty(i)){
           return false;
         }
    }

    return true;
}

function isSpotEmpty(i){
  if(gameBoard[i] !='X' && gameBoard[i] !='O')
  {
    return true;
  }
}

function newGame(){
  //reset variables
  gameBoard = [0,1,2,3,4,5,6,7,8];

  //clear images
  for(var n = 0 ; n < gameBoard.length ; n++){
    document.getElementById(gameBoardDisplayIDs[n]).style.backgroundImage = "url(./images/blank.jpg)";
  }

  //clear message and hide button
  document.getElementById("divDeclareWinner").innerHTML = "";
  document.getElementById("btnPlayAgain").style.display = "none";
}
