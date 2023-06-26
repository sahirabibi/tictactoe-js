// global variables
const playerX = "X";
const playerO = "O";
const WIN_COMBOS = [];
let game_on = true;


// state variables
let currentPlayer = "X";



// cached DOM Elements
// game board
// turn display
// play again button 
// start button




// functions
// switch players
function displayMove(target, currentPlayer) {
    // take the target and updates its inner HTML to display the move made by the player only if space is available
    if (target.innerText === "") {
        target.innerText = currentPlayer;
        return true;

    }
    return false;
    
}; 

function isGameOver(winningMoves) {
    // check if there are any winning moves made on game
    // return true
    // else 
    // return false
    return false

};


function switchPlayers() {
    // change the current player
    if (currentPlayer === "X") {
        currentPlayer = "O";
        
    } else {
        currentPlayer = 'X';
    }
    // update symbol in display screen to match current player
    document.querySelector('.symbol').innerText = currentPlayer;   
};

function declareWinner(currentPlayer) {
    // return winner
    // change "Current Player" to say Winner
    return currentPlayer
};


// event listeners 
// get Board and listen for clicks
    // if clicked -> function displayMove()

// get board and add event listener to every sqr
// if sqr is clicked
    // innerHTML = currentPlayer symbol 


let board = document.querySelector(".board") 
board.addEventListener("click", (e) => {
    if (e.target.classList.contains("sqr")) {
        // send event to function that will update board
        let target = e.target;
        // display player move
        let success = displayMove(target, currentPlayer);
        // if move made successfully, continue
        if (success) {
            // check if anyone has won
            isGameOver();
            // switch the player if no winners
            switchPlayers();
            // else declare winner
            declareWinner(currentPlayer);
        }
       

    }
})

let restart = document.querySelector("#restart")
restart.addEventListener("click", (e) => {
    // reset the board!

})



// GAME LOGIC
// set two players: X and O
// assign player 1 = X;
// adding player 2 = O;
// begin turn of player1 (player 1 is always X)
// Allow player to click on board to make move
    // add event listener to board 
    // if space clicked is empty ---> displayMove(currentPlayer) 
    // remove event listener from that space so no other changes can occur to it.
        // displayMove(currentPlayer)
            // add either an X or O depending on var currentPlayer
        // check board to see if any one has won ---> checkWinner()
            // if winner --> declareWinner(player)
            // else ---> switchPlayers()
