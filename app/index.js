const express = require('express');
const path = require('path');
const morgan = require('morgan');
const logger = morgan('tiny');

const app = express();
app.use(logger);

const lg = (req, res, next) => {
    morgan(':date[iso] :method :url :status :remote-addr');
    next();
}

app.use('/submit', lg, (req, res) => {

    console.log(req.url);
    resObj = {
        text: req.query.text,
        pass: req.query.password
    }
    
    res.write('<a href="http://localhost:5000/">Home</a>');
    res.write('\n');
    res.write(JSON.stringify(resObj));
    res.end();
})

app.use('/add', lg, (req, res) => {
    res.write('<a href="http://localhost:5000/calc">Calc</a>');
    a = req.query.fn;
    b = req.query.sn;

    a = parseInt(a); 
    b = parseInt(b);

    sum = a+b;
    if (isNaN(sum)) {
        res.write('Enter valid number');
    }
    else {
        res.write('sum of ' + a + " + " + b + " = " + (a+b));
    }

    res.end();    
})

app.use('/calc', lg,  (req, res) => {
    const filePath = path.join(__dirname, 'public/add.html');
    res.sendFile(filePath);
})

app.use('/', lg, (req, res) => {
    const filePath = path.join(__dirname, 'public/index.html');
    res.sendFile(filePath);
})


app.listen(5000);