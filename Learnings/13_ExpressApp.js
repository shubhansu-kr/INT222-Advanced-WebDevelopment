const express = require('express');

const app = express();

app.get('/get', (req, res) => {
    console.log(req.url);
    res.send('I am in express Mode');
})

app.listen(5000);