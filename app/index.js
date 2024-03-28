const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log("Home: ", req.cookies);
    res.send('Home');
});

app.get('/setCookie', (req, res)=>{
    res.cookie('key', 'value');
    res.send('Cookie Set in Browser');
    console.log('Cookies: Set: ', req.cookies);
});

app.get('/clearCookie', (req, res) => {
    console.log("Cookies: Clear: ", req.cookies);
    res.clearCookie('key', 'value');
    res.send('Cookie Cleared');
});

app.listen(5050);