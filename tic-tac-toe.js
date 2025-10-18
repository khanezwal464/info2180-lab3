// Waiting until the DOM is fully loaded 
window.addEventListener("DOMContentLoaded", () => {

  // Constant Declarations
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const statusDiv = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");

  // Variables for the game state
  let currPlayer = "X"; // Starting with X
  let gameState = Array(9).fill(null); // Tracking board state
  let gameOver = false;

  // Styling of board for Exercise 1
  squares.forEach(square => {
    square.classList.add("square");
  });

  // Adding click event to each square
  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      // Prevent overwriting a square or continuing after game is over
      if (gameOver || gameState[index] !== null) return;

      // Mark the square 
      square.textContent = currPlayer;
      square.classList.add(currPlayer);
      gameState[index] = currPlayer;

      // Check if the current move wins the game
      if (checkWin()) {
        statusDiv.textContent = `Congratulations! ${currPlayer} is the Winner! 🎉`;
        statusDiv.classList.add("you-won");
        gameOver = true;
        return;
      }

      // ✅ Check if all squares are filled but no winner (draw)
      if (!gameState.includes(null)) {
        statusDiv.textContent = `It's a draw! ${currPlayer} could not win. Try again!`;
        statusDiv.classList.remove("you-won");
        gameOver = true;
        return;
      }

      // Switch player turn
      currPlayer = currPlayer === "X" ? "O" : "X";
    });

    // Changing the style when mouse hovers over a square
    square.addEventListener("mouseover", () => {
      if (!gameOver && !square.textContent) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });

  // ✅ New Game button logic
  newGameBtn.addEventListener("click", () => {
    gameState.fill(null);
    squares.forEach(square => {
      square.textContent = "";
      square.className = "square"; // Reset styling
    });

    statusDiv.textContent = "Hover a square with your mouse and click to play either an X or an O.";
    statusDiv.classList.remove("you-won");
    currPlayer = "X";
    gameOver = false;
  });

  // ✅ Check for winner function
  function checkWin() {
    const winningMoves = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winningMoves.some(move => {
      const [a, b, c] = move;
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return true;
      }
      return false;
    });
  }

}); // Closing DOMContentLoaded