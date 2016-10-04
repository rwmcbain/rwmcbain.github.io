var gameBoard = [[null, null, null],
                 [null, null, null],
                 [null, null, null]];
var turn = 0;
var hillaryImage = '<img src = "images/clinton.svg" class = "clinton" />'; 
var trumpImage = '<img src = "images/trump.svg" class = "trump" />';


var resetGame = function() {
    $('#reset').click(function(){
        location.reload();
    })
};

var trumpWins = function(){
    $('#winner-box').html("TRUMP WINS", "<button id='reset'>PLAY AGAIN</button>");
    $('#winner-box').append("<button id='reset'>PLAY AGAIN</button>");
};

var clintonWins = function() {
    $('#winner-box').html("HALLELUJAH HILLDAWG WINS");
    $('#winner-box').append("<button id='reset'>PLAY AGAIN</button>");
};

var gamePlay = function (){
    $('#boxA').one("click", function(){
        if(turn % 2 === 0){
            $('#boxA').append(trumpImage);
            gameBoard[0][0] = 0;
        }
        else {
            $('#boxA').append(hillaryImage);
            gameBoard[0][0] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxB').one("click", function(){
        if(turn % 2 === 0){
            $('#boxB').append(trumpImage);
            gameBoard[0][1] = 0;
        }
        else {
            $('#boxB').append(hillaryImage);
            gameBoard[0][1] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxC').one("click", function(){
        if(turn % 2 === 0){
            $('#boxC').append(trumpImage);
            gameBoard[0][2] = 0;
        }
        else {
            $('#boxC').append(hillaryImage);
            gameBoard[0][2] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxD').one("click", function(){
        if(turn % 2 === 0){
            $('#boxD').append(trumpImage);
            gameBoard[1][0] = 0;
        }
        else {
            $('#boxD').append(hillaryImage);
            gameBoard[1][0] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxE').one("click", function(){
        if(turn % 2 === 0){
            $('#boxE').append(trumpImage);
            gameBoard[1][1] = 0;
        }
        else {
            $('#boxE').append(hillaryImage);
            gameBoard[1][1] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxF').one("click", function(){
        if(turn % 2 === 0){
            $('#boxF').append(trumpImage);
            gameBoard[1][2] = 0;
        }
        else {
            $('#boxF').append(hillaryImage);
            gameBoard[1][2] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxG').one("click", function(){
        if(turn % 2 === 0){
            $('#boxG').append(trumpImage);
            gameBoard[2][0] = 0;
        }
        else {
            $('#boxG').append(hillaryImage);
            gameBoard[2][0] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxH').one("click", function(){
        if(turn % 2 === 0){
            $('#boxH').append(trumpImage);
            gameBoard[2][1] = 0;
        }
        else {
            $('#boxH').append(hillaryImage);
            gameBoard[2][1] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
    $('#boxI').one("click", function(){
        if(turn % 2 === 0){
            $('#boxI').append(trumpImage);
            gameBoard[2][2] = 0;
        }
        else {
            $('#boxI').append(hillaryImage);
            gameBoard[2][2] = 1;
        }
        turn++;
        checkRowWinner();
        checkColumnWinner();
        checkDiagonalWinner();
    });
};

gamePlay();
checkRowWinner = function(){
    if (gameBoard[0][0] === 0  && gameBoard[0][1] === 0 && gameBoard [0][2] === 0){
        trumpWins();
    }
    else if (gameBoard[0][0] === 1  && gameBoard[0][1] === 1 && gameBoard [0][2] === 1){
        clintonWins();
    }
    else if (gameBoard[1][0] === 0  && gameBoard[1][1] === 0 && gameBoard [1][2] === 0){
        trumpWins();

    }
    else if (gameBoard[1][0] === 1  && gameBoard[1][1] === 1 && gameBoard [1][2] === 1){
        clintonWins();
    }
    else if (gameBoard[2][0] === 0  && gameBoard[2][1] === 0 && gameBoard [2][2] === 0){
        trumpWins();
    }
    else if (gameBoard[2][0] === 1  && gameBoard[2][1] === 1 && gameBoard [2][2] === 1){
        clintonWins();
    }
    else {
    }
    resetGame();
};

var checkColumnWinner = function(){
    if (gameBoard[0][0] === 0  && gameBoard[1][0] === 0 && gameBoard [2][0] === 0){
        trumpWins();
    }
    else if (gameBoard[0][0] === 1  && gameBoard[1][0] === 1 && gameBoard [2][0] === 1){
        clintonWins();
    }
    else if (gameBoard[0][1] === 0  && gameBoard[1][1] === 0 && gameBoard [2][1] === 0){
        trumpWins();
    }
    else if (gameBoard[0][1] === 1  && gameBoard[1][1] === 1 && gameBoard [2][1] === 1){
        clintonWins();
    }
    else if (gameBoard[0][2] === 0  && gameBoard[1][2] === 0 && gameBoard [2][2] === 0){
        trumpWins();
    }
    else if (gameBoard[0][2] === 1  && gameBoard[1][2] === 1 && gameBoard [2][2] === 1){
        clintonWins();
    }
    else {
    }
    resetGame();
};

var checkDiagonalWinner = function(){
    if (gameBoard[0][0] === 0  && gameBoard[1][1] === 0 && gameBoard [2][2] === 0){
        trumpWins();
    }
    else if (gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard [2][2] === 1){
        clintonWins();
    }
    else if (gameBoard[0][2] === 0 && gameBoard[1][1] === 0 && gameBoard [2][0] === 0){
        trumpWins();
    }
    else if (gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard [2][0] === 1){
        clintonWins();
    }
    else {
    }
    resetGame();
};

