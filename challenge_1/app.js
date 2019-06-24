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

// event listener for clicks tied to the board
document.getElementById("board").addEventListener("click", function(event) {
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
            // switch turns
            playerMark = !playerMark;
            console.log("playerMark flipped!");
            switchPlayers();
        }
    }
})