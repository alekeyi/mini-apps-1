const express = require("express");
const app = express();
const port = 4000;

// create static server which refers to client folder
app.use(express.static("client"));
// express middleware used to extract form-data sent by post, can use native instead of bodyParser
// must provide object with extended key with value true, undefined is deprecated
app.use(express.urlencoded({ extended: true }));
// can use native express.json() instead of bodyParser.json()
app.use(express.json());
// // use validator to check input and report errors before creation of input data
// const { check, validationResult } = require("express-validator");

// get request for main page, returns index.html due to express.static above
app.get("/", (req, res) => {
  console.log("Get hit on the main page!");
  // res.send('Howdy!');
});

// post request to submit form data via submit button
app.post(
  "/submit",
  /*[ //insert middleware
        // form data must be at least 5 chars long
        check('formData').isLength({ min: 5 })
    ],*/ (
    req,
    res
  ) => {
    // res, req function
    /*// finds any validation errors and wraps in object
        const errors = validationResult(req);
        // if error
        if (!errors.isEmpty()) {
            // returns a status code of 422: Unprocessable Entity and the errors in an array
            return res.status(422).json({ errors: errors.array() });
        }*/

    console.log("Post submit on the main page");
    console.log("\nREQUEST HEADERS: \n", req.headers);
    // console.log("\nForm data in REQUEST BODY: \n", req.body);
    // SalesReport.create({
    //     formData: req.body.formData
    // }).then(inputData => res.json(inputData));
    // const formData = req.body.formData;
    // console.log("formData: ", formData);
    // res.send(formData);
    res.json(req.body.formData);
    console.log("\nreq.body.formData", req.body.formData);
  }
);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
