// Question: How will you handle error in Connect application. Write a middle ware to handle error in Express.js;

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const errorMiddleWare = require('./middleware/error');
const logReqMiddleWare = require('./middleware/log');

const app = express();
app.use(errorMiddleWare);

const greetUser = async (req, res) => {
    res.status(200).send('Hello World');
};

const throwError = async (req, res, next) => {
    const err = new Error('Demonstrated Error');
    next(err);
}

app.use('/error', throwError);
app.use('/', logReqMiddleWare, greetUser);

app.listen(5050, ()=>{
    MongoClient.connect(url).then((client) => {
        console.log('Connected to client');
        client.close();
    }).catch((err) => {
        console.log('Error Connecting to the db');
        console.log(err);
    });

    console.log('Server is listening on port 5050');
});
