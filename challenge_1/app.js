console.log("Is app.js loading into HTML???");

// reset button
const button = document.querySelector('button');

// create an event listener for button click
button.addEventListener('click', event => {
    console.log('Reset!');
    // iterate through entire board to reset all values
    for(let i = 1; i < 10; i++) {
        document.getElementById(`square-${i}`).innerHTML = '';
    }
    // reset player order toggle 
    playerMark = true;
    // reset turns
    turns = 0;
});


// set a variable to be toggled in order to determine whose turn it is
// NEVERMIND // set the variable to be random on page load
// NEVERMIND // let playerMark = Math.random() >= 0.5;
let playerMark = true;
// set a starting mark, which can be toggled between X and O
// NEVERMIND // set the mark according to which random playerMark was chosen
// NEVERMIND // let mark = playerMark ? 'X' : 'O';
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

// init. diagonal checker since line 51 resets regular checker prematurely
let instanceOfXDiag = 0;
let instanceOfODiag = 0;
// init. checker on whether cell was already counted, because line 51 resets iterator each time
let checkedDiag = 0;
let xOrO = 1;

// event listener for clicks tied to the board
document.getElementById("board").addEventListener("click", function(event) {
    // set conditional to check if game is in progress, or over
    // if its in progress
    // console.log('event.target.innerHTML: ', event.target.innerHTML);
    if (turns < 9 && winner.length === 0) {
        console.log("turn on click: ", turns);
        // event.target is clicked element
        // conditional based on if it is clicked on table cell (td) or within table cell on an already-created mark ("B" for bold)
        if (event.target && (event.target.nodeName === "TD" ||  event.target.nodeName === "B")) {
            // event.target.id is id of clicked element
            // console.log('event.target.nodeName: ', event.target.nodeName);
            // console.log(event.target.id, " was clicked ");
            // console.log('length of target innerHTML: ', document.getElementById(event.target.id).innerHTML.length);
            // conditional which makes sure the cell is empty before placing mark and setting next turn
            if (document.getElementById(event.target.id).innerHTML.length === 0) {
                // place mark
                document.getElementById(event.target.id).innerHTML = `<b>${mark}</b>`;
                document.getElementById(event.target.id).style.textAlign = "center";
                // add one to turn
                turns++;
                // console.log("turn: ", turns);
                // switch turns
                playerMark = !playerMark;
                console.log("playerMark flipped!");
                switchPlayers();
            }
        }
        // conditional to check if anyone won after enough turns
        // console.log("TURN: ", turns);
        if (turns > 4) {
            // console.log("TURN: ", turns);
            resultOfGame();
        }
    } else { // if its over
        resultOfGame();
    }
});

// create variable to display winner
let winner = '';
// create variable for the status of a winner tie;
let tie = false;

// write function to determine whether game won or tied, and result
let resultOfGame = function() {
    // create variable which adds up instances of X in row, column, and diagonal row
    let instanceOfX = 0;

    // create variable which adds up instances of O in row, column, and diagonal row
    let instanceOfO = 0;

    // create variables which adds up win in each row, column, and diagonal row to make sure no ties
    // NO! BAD! NOT TIC TAC TOE RULES! FOOL!
    // let instanceOfXWin = 0;
    // let instanceOfOWin = 0;

    // inspect by row
    // iterate through each row
    for(let i = 1; i < 9; i+=3) {
        // iterate down each row
        for(let j = i; j < i + 3; j++){
            // add up instances of X along row iteration
            // console.log('i row: ', i);
            // console.log('j column: ', j);
            if(document.getElementById(`square-${j}`).innerHTML.indexOf('X') > -1) {
                instanceOfX++;
            } else if(document.getElementById(`square-${j}`).innerHTML.indexOf('O') > -1) { 
            // add up instances of O along row iteration
                instanceOfO++;
            }
            // console.log("   o: ", instanceOfO, "x: ", instanceOfX)
        }
        // determine if there was a winner in iterated row
        // console.log("WINNER CHECK in row: ", i);
        if(instanceOfX === 3) { // if X wins
            winner = 'X';
        }
        if(instanceOfO === 3) { // if O wins
            winner = 'O';
        }
        // clear results of counts after iterating through entire row
        instanceOfX = 0;
        instanceOfO = 0;
    }
    
    // inspect by column
    // iterate through each column, if there isn't already a winner
    if(winner.length === 0) {
        for(let i = 1; i < 3; i++) {
            // iterate down each column
            for(let j = i; j < 3; j++) {
                // add up instances of X along column iteration
                // console.log('i column: ', i);
                // console.log('j row: ', j);
                if(document.getElementById(`square-${i}`).innerHTML.indexOf('X') > -1) {
                    instanceOfX++;
                } else if(document.getElementById(`square-${i}`).innerHTML.indexOf('O') > -1) {
                // add up instances of O along column iteration
                    instanceOfO++;
                }
                // console.log("   o: ", instanceOfO, "x: ", instanceOfX);
            }
            // determine if there was a winner in iterated column
            if(instanceOfX === 3 && instanceOfO < 3) { // if X wins and no tie
                winner = 'X';
            }else if(instanceOfO === 3 && instanceOfX < 3) { // if O wins and no tie
                winner = 'O';
            }
            // clear results of counts after iterating through entire column
            instanceOfX = 0;
            instanceOfO = 0;
        }
    }

    
    // inspect by diagonal
    // by major diagonal // use matrices for this
    if(winner.length === 0) {
        // iterate through rows
        for(let i = xOrO; i <= 7; i+=3) {
            // one column in each row
            for(let j = i + checkedDiag; j < i + 1; j++) {
                console.log("ROW: ", i, "\nCOLUMN: ", j, "\nin turn: ", turns);
                if(document.getElementById(`square-${j}`).innerHTML.indexOf('X') > -1) {
                    console.log("instanceOfXDiag++++++++++++++++++++");
                    instanceOfXDiag++;
                } else if(document.getElementById(`square-${j}`).innerHTML.indexOf('O') > -1) {
                // add up instances of O along column iteration
                    console.log("instanceOfODiag++++++++++++++++++++");
                    instanceOfODiag++;
                }
            }
            checkedDiag++;
            xOrO++;
        }
    }
    

    

    // by minor diagonal



    // check for winner tie // NEVERMIND THATS NOT THE RULES!
    // if(instanceOfXWin > 0 && instanceOfOWin > 0){
    //     winner = '';
    //     tie = true;
    //     console.log("We got a tie!");
    // }

    // set conditional to return in case of winner or tie
    if (winner.length > 0) {
        document.getElementById("result").innerHTML = `<b>${winner} WINS!</b>`;
        document.getElementById(event.target.id).style.textAlign = "center";
    // THIS ISNT HOW TIC TAC TOE WORKS!! NO TIE WINS!
    // } else if (tie === true) { // in case of tie win
    //     document.getElementById("result").innerHTML = '<b>TIE! WE ALL WIN!</b>';
    //     document.getElementById(event.target.id).style.textAlign = "center";
    } else { // in case of no win
        if (turns === 9) { // only check for tie if all slots taken
            document.getElementById("result").innerHTML = '<b>TIE! WE ALL LOSE! BOO!!</b>';
            document.getElementById(event.target.id).style.textAlign = "center";
        }
    }
}