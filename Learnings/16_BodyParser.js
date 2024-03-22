const express = require('express');

const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.express.urlencoded);

app.get('/submit', (req, res) => {
    console.log(req.body.text, req.body.password);
    res.send('Hello World');
});

app.listen(200);