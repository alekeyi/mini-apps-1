const mysql = require("mysql");
const connection = mysql.createConnection(require("./config.js"));

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// set a string to get all users
let queryString = "SELECT * FROM users";

const allUsers = cb => {
  // this query gets all users
  connection.query(queryString, function(err, results, fields) {
    if (err) throw err;
    cb(err, results); // callback comes from server.js
  });
};

module.exports = {
  allUsers
};
