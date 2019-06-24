console.log("Is app.js loading into HTML???");

// set a variable to be toggled in order to determine whose turn it is
let playerMark = true;
// set a starting mark, which can be toggled between X and O
let mark = 'X';

// write a function to keep track of what mark to use
let switchPlayers = function() {
    if (playerMark === false) {
        mark = 'O';
    } else {
        mark = 'X';
    }
}

// set a variable which counts turns to know when game is over at 9 turns
let turns = 0;

// event listener for clicks tied to the board
document.getElementById("board").addEventListener("click", function(event) {
    // set conditional to check if game is in progress, or over
    // if its in progress
    if (turns < 9) {
        // event.target is clicked element
        // conditional based on if it is clicked on table cell (td) or within table cell on an already-created mark ("B" for bold)
        if (event.target && (event.target.nodeName === "TD" ||  event.target.nodeName === "B")) {
            // event.target.id is id of clicked element
            console.log('event.target.nodeName: ', event.target.nodeName);
            console.log(event.target.id, " was clicked ");
            console.log('length of target innerHTML: ', document.getElementById(event.target.id).innerHTML.length);
            // conditional which makes sure the cell is empty before placing mark and setting next turn
            if (document.getElementById(event.target.id).innerHTML.length === 0) {
                // place mark
                document.getElementById(event.target.id).innerHTML = `<b>${mark}</b>`;
                document.getElementById(event.target.id).style.textAlign = "center";
                // add one to turn
                turns++;
                console.log("turn: ", turns);
                // switch turns
                playerMark = !playerMark;
                console.log("playerMark flipped!");
                switchPlayers();
            }
        }
    } else { // if its over
        resultOfGame();
    }
});

// create variable to display winner
let winner = '';

// write function to determine whether game won or tied, and result
let resultOfGame = function() {
    // inspect by row

    // inspect by column

    // inspect by diagonal
    // by major diagonal 
    // by minor diagonal
    // set conditional to return in case of winner
    if (winner.length > 0) {
        document.getElementById("result").innerHTML = `<b>${winner} WINS!</b>`;
        document.getElementById(event.target.id).style.textAlign = "center";
    } else { // in case of tie
        document.getElementById("result").innerHTML = `<b>TIE! WE ALL WIN!</b>`;
        document.getElementById(event.target.id).style.textAlign = "center";
    }
}