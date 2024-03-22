const express = require('express');
const path = require('path');
const morgan = require('morgan');
const logger = morgan('tiny');

const app = express();
app.use(logger);

app.use('/submit', (req, res) => {

    console.log(req.url);
    resObj = {
        text: req.query.text,
        pass: req.query.password
    }
    morgan(':date[iso] :method :url :status :remote-addr');
    res.write('<a href="http://localhost:5000/">Home</a>');
    res.write('\n');
    res.write(JSON.stringify(resObj));
    res.end();
})

app.use('/', (req, res) => {
    morgan(':date[iso] :method :url :status :remote-addr');
    const filePath = path.join(__dirname, 'public/index.html');
    res.sendFile(filePath);
})


app.listen(5000);