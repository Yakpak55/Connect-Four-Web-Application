// The differences between iterating over an array with the 4 primary looping constructs
// 1. for (let i = 0; i < arr.length; ++i)
// 2. for (let i in arr)
//      The for and for/in looping constructs give you access to the index in the array, not the 
//      actual element
//      Code example:
//            for (let i = 0; i < arr.length; ++i) {
//              console.log(arr[i]);
//            }
//
//            for (let i in arr) {
//              console.log(arr[i]);
//            }
// 3. arr.forEach((v, i) => { /* ... */ })
// 4. for (const v of arr)
//      The forEach() and for/of, allows access to the array element itself; with forEach() can
//      access the array index i, with for/of cannot
//      Code example:
//            arr.forEach((v, i) => console.log(v));
//
//            for (const v of arr) {
//              console.log(v);
//            }

// Check for game over
function gameOverCheck() 
{
//console.log("gameOverCheck");
        
    // Declare variable count, initialized to 0
    
    // Iterate through the 2d array initialMatrix
    // Write a for/of loop to iterate through the rows, loop control variable innerArray, in    2d array initialMatrix
        // If object innerArray, function every(val => (val) != 0))
            // increment variable count by 1
        // Else
            // return false
  
    // If variable count is equal to 6
         // Set constant message, property innerText, equal to "Game Over"
        // return false
}

// Win check logic
function winCheck (row, column)
{
//console.log("winCheck");
    // Write decision making logic, if function call checkHorizontal, checkVertical, checkPositiveDiagonal, or checkNegativeDiagonal is true, return true
    // else return false
}

// Sets the circle to exact points
function setPiece (startCount, colValue) 
{
//console.log("setPiece");

    // Add exception handling so the player cannot click a full column
    // Current if/else should be wrapped inside a try{} block
    // The catch(e){} block should display and alert dialog box informing the player "Column full, select again"

}

// Write function checkHorizontal to do the following
{
    // Write a nest for loop to iterate through the rows and columns

            // if the currentPlayer has four discs in a row horizontally, return true

    
    // return false
}

// Write function checkVertical to do the following
{
    // Write a nest for loop to iterate through the columns and rows

            // if the currentPlayer has four discs in a row vertically, return true

    
    // return false
}

// Write function checkPositiveDiagonal to do the following
{
    // Write a nest for loop to iterate through the rows and columns

        // if the currentPlayer has four discs in a row diagonally, bottom right to top left, return true

    
    // return false    
}

// Write function checkNegativeDiagonal to do the following
{
    // Write a nest for loop to iterate through the rows and columns

        // if the currentPlayer has four discs in a row diagonally, bottom left to top right, return true

    
    // return false    
}

// Initialize the game when the window loads
// For the window.onload event, call function startGame
window.onload = startGame;