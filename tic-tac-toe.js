//Waiting until the DOM is fully loaded 
window.addEventListener("DOMContentLoaded", () => {

    //Constant Declarations
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    const statusDiv = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    //Variables for the game state

    //Starting with X
    let currPlayer = "X"; 
    //Tracking board state
    let gameState = Array(9).fill(null);
    let gameOver = false;

    //Styling of board for Exercise 1
    squares.forEach(square => {
        square.classList.add("square");
    });

    //Adding click event to each square
    squares.forEach((square,index) => {
        square.addEventListener("click", () => {
            //Prevent overwriting a square
            if (gameState[index] !== null) return;

            //Mark the square 
            square.textContent = currPlayer;
            square.classList.add(currPlayer);
            //Prevent overwriting a square
            if (gameState[index] !== null) return;

            // Mark the square 
            square.textContent = currPlayer;
            square.classList.add(currPlayer);
            gameState[index] = currPlayer;

            //Switch player turn
            currPlayer = currPlayer == "X" ? "O" : "X";
        });

        //Changing the style when mouse hovers ovber a square
        square.addEventListener("mouseover", () => {
            if(!gameOver && !square.textContent) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.add("hover");

        });
        //Restarting game
        //newGameBtn

    });

    //Checking for winner
    //function checkWin() {
        //const winningMoves = [

        //]
    //}
});