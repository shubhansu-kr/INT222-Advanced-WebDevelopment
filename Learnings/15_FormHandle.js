const express = require('express');

const app = express();

app.get('/submit', (req, res) => {
    resObj = {
        email: req.query.email,
        pass: req.query.password
    }
    res.send(resObj);
})