const express = require('express');
const app = express();
const port = 4000;

// create static server which refers to client folder
app.use(express.static('client'));
// express middleware used to extract form-data sent by post
app.use(express.urlencoded());

app.get('/', (req, res) => {
    console.log('Get hit on the main page!');
    res.send('Howdy!');
});

app.post('/submit', (req, res) => {
    console.log('Post submit on the main page');
    res.send("YUP");
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));

