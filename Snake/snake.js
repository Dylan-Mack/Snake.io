// board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;


//snake H

var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

// food

var foodX = blocksize * 10;
var foodY = blocksize * 10;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d"); // used for drawing the board 

    update();
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="lime";
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
}