const express = require('express');
const path = require('path');

const app = express();

app.use('/', (req, res) => {
    console.log(__dirname);
    const filePath = path.join(__dirname, 'app/public/index.html');
    res.sendFile(filePath);
})