// bring in express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// bring in database
const db = require("./db");

// setup static
app.use(express.static("public"));

// setup routes
// app.get("/", (req, res) => {
//   res.send("Dodge this.");
// });

// setup database connection to server, with callbacks
app.get("/users", (req, res) => {
  db.allUsers((err, users) => {
    console.log("Querying all users...");
    res.send(users);
  });
});

// setup route for form posts
app.post("/submit", (req, res) => {
  // db.allUsers((err, users) => {})
});

// setup listener
app.listen(3000, () => {
  console.log("`I'm 'listenieng'` - DaServer... `Port: 3000, babey`");
});
