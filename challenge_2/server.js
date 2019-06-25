const express = require("express");
const app = express();
const port = 4000;

let serverArray = [];

// create static server which refers to client folder
app.use(express.static("client"));
// express middleware used to extract form-data sent by post, can use native instead of bodyParser
// must provide object with extended key with value true, undefined is deprecated
app.use(express.urlencoded({ extended: true }));
// can use native express.json() instead of bodyParser.json()
app.use(express.json());

// get request for main page, returns index.html due to express.static above
app.get("/", (req, res) => {
  console.log("Get hit on the main page!");
  // res.send('Howdy!');
});

app.get("/submit", (req, res) => {
    console.log("Thru the looking glass -- get /submit");
    console.log("REQ.QUERY: ", req.query);
    res.send(serverArray);
});

// post request to submit form data via submit button
app.post("/submit", (req, res) => {
  // res, req function
  console.log("Post submit on the main page");
  // console.log("\nREQUEST HEADERS: \n", req.headers);
  // console.log("\nForm data in REQUEST BODY: \n", req.body);
  console.log("\nreq.body.formData", req.body.formData);
  console.log("req.body: ", req.body);
  if(req.body.formData) {
    let trimmedData = req.body.formData.replace(/\s+/g, ' ').trim();
    serverArray.push(trimmedData);      
  } else {
    // serverArray.push(data);
  }
//   let postData = document.getElementById("salesReps");
//   postData.innerHTML = serverArray;
  console.log("REQ.PARAMS: ", req.params);
  console.log("REQ.PARAM(): ", req.param());
//   console.log("REQ.QUERY: ", req.query);
  // res.json(req.body.formData);
  res.send(req.body.formData);
  // res.render(req.body.formData);
  console.log("\nreq.body.formData", req.body.formData);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
