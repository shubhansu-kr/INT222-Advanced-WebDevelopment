const express = require('express');
const path = require('path');

const app = express();

app.use('/submit', (req, res) => {

    console.log(req.url);
    resObj = {
        text: req.query.text,
        pass: req.query.password
    }
    // 
    res.write('<a href="http://localhost:5000/">Home</a>');
    res.write('\n');
    res.write(JSON.stringify(resObj));
    res.end();
})

app.use('/', (req, res) => {
    const filePath = path.join(__dirname, 'public/index.html');
    res.sendFile(filePath);
})


app.listen(5000);