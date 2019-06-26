// bring in express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// setup static
app.use(express.static("public"));

// setup routes
// app.get("/", (req, res) => {
//   res.send("Dodge this.");
// });

// setup listener
app.listen(3000, () => {
  console.log("`I'm 'listenieng'` - DaServer... `Port: 3000, babey`");
});
