console.log("Is app.js loading into HTML???");

// set a variable to be toggled in order to determine whose turn it is
let playerMark = true;

document.getElementById("board").addEventListener("click", function(event) {
    // event.target clicked element
    if (event.target /*&& event.target.nodeName == "td"*/) {
        console.log(event.target.id, " was clicked");
    }
})