const container = document.querySelector(".container");
const playerTurn = document.getElementById("playerTurn");
const message = document.getElementById("message");

// Declare variable initialMatrix as a 2d array, 6 rows, 7 columns, initialized to all 0s
let initialMatrix = Array.from({ length: 6 }, () => Array(7).fill(0));

// Declare variable currentPlayer to store the current player
let currentPlayer;

// Function to check if the game is over
function gameOverCheck() {
    let count = 0;
    for(innerArray of initialMatrix)
        {
            if (innerArray.every(val => (val) != 0))
                count++;
            else
                return false;
        }
    
    if (count == 6)
        {
            message.innerText = "Game over";
            return false;
        }
    
  return false;
}

// Function to check if a player has won
function winCheck(row, column) {
    
    if (checkHorizontal() || checkVertical() || checkPositiveDiagonal() || checkNegativeDiagonal())
        {
            return true;
        }
    else{
        return false;
    }

}

// Function to set a piece on the board
function setPiece(startCount, colValue) {
  
try{
 
      let rows = document.querySelectorAll(".grid-row");
      if (initialMatrix[startCount][colValue] != 0) {
            startCount--;
            setPiece(startCount, colValue);
      } else {
            let currentRow = rows[startCount].querySelectorAll(".grid-box");
            currentRow[colValue].classList.add("filled", `player${currentPlayer}`);
            initialMatrix[startCount][colValue] = currentPlayer;
            if (winCheck(startCount,colValue) == true) {
                message.innerHTML = `Player<span> ${currentPlayer}</span> wins`;
                return false;
            }
        }
    }
    catch(e)
        {
            alert("Column full, select again");
        }

    gameOverCheck();
  }

// Function to handle the click event on a grid box
function fillBox(e) {

  let colValue = parseInt(e.target.getAttribute("data-value"));

  setPiece(5, colValue);

  currentPlayer = currentPlayer === 1 ? 2 : 1;

  playerTurn.innerHTML = `Player <span>${currentPlayer}'s</span> turn`;
}

// Function to create the game board
function createBoard() {

  for (let i = 0; i < initialMatrix.length; i++) {
    let outerDiv = document.createElement("div");

    outerDiv.classList.add("grid-row");

    for (let j = 0; j < initialMatrix[i].length; j++) {
      initialMatrix[i][j] = 0;

      let innerDiv = document.createElement("div");

      innerDiv.classList.add("grid-box");

      innerDiv.setAttribute("data-value", j);
      innerDiv.addEventListener("click", (e) => {
        fillBox(e);
      });

      outerDiv.appendChild(innerDiv);
    }

    container.appendChild(outerDiv);
  }
}


function checkHorizontal(){

    for(let game_row = 0; game_row < initialMatrix.length; game_row++)
        {
            for(let game_col = 0; game_col < initialMatrix[game_row].length - 3; game_col++)
                {
                    if (initialMatrix[game_row][game_col] == currentPlayer && initialMatrix[game_row][game_col + 1] == currentPlayer && initialMatrix[game_row][game_col + 2] == currentPlayer && initialMatrix[game_row][game_col + 3] == currentPlayer)
                        return true;
                }
        }
    return false;
    //checks to see if player gets 4 in a horizontal win
}

function checkVertical(){
     for (let game_row = 0; game_row < initialMatrix.length - 3; game_row++)
    {
//checks to see if player gets 4 in a vertical win
        for (let game_col = 0; game_col < initialMatrix[game_row].length; game_col++)
        {
            if (initialMatrix[game_row][game_col] == currentPlayer && initialMatrix[game_row + 1][game_col] == currentPlayer && initialMatrix[game_row + 2][game_col] == currentPlayer && initialMatrix[game_row + 3][game_col] == currentPlayer)
                return true;
        }
    }
    return false;
    
}

function checkPositiveDiagonal(){
    
    for (let game_row = 3; game_row < initialMatrix.length; game_row++)
    {
        for (let game_col = 0; game_col < initialMatrix[game_row].length - 3; game_col++)
        {
            if (initialMatrix[game_row][game_col] == currentPlayer && initialMatrix[game_row - 1][game_col + 1] == currentPlayer && initialMatrix[game_row - 2][game_col + 2] == currentPlayer && initialMatrix[game_row - 3][game_col + 3] == currentPlayer)
                return true;
        }
    } //checks to see if player gets 4 in a Diagonal win
    return false;
}

function checkNegativeDiagonal (){
    
    for (let game_row = 3; game_row < initialMatrix.length; game_row++)
    {
        for (let game_col = 3; game_col < initialMatrix[game_row].length; game_col++)
        {
            if (initialMatrix[game_row][game_col] == currentPlayer && initialMatrix[game_row - 1][game_col - 1] == currentPlayer && initialMatrix[game_row - 2][game_col - 2] == currentPlayer && initialMatrix[game_row - 3][game_col - 3] == currentPlayer)
                return true;
        }
    }
    return false;
}

// Function to start the game
function startGame() {
  // Set currentPlayer to 1, player 1 always goes first
  currentPlayer = 1;

  // Set the container's innerHTML to an empty string
  container.innerHTML = "";

  // Call function createBoard
  createBoard();

  // Set playerTurn's innerHTML to `Player <span>${currentPlayer}'s</span> turn`
  playerTurn.innerHTML = `Player <span>${currentPlayer}'s</span> turn`;
}

// For the window.onload event, call function startGame
window.onload = startGame;