//Waiting until the DOM is fully loaded 
window.addEventListener("DOMContentLoaded", () => {

    //Selecting the game board
    const gameboard = document.getElementById("gameboard");

    //Getting all squares inside the board
    const squares = gameboard.querySelectorAll("div");

    //Adding the CSS class "square" to each div for styling 
    squares.forEach(sq => {
        sq.classList.add("sq");
    });
});