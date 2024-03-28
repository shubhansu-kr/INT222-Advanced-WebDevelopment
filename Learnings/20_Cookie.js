const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/setCookie', (req, res)=>{
    res.cookie('key', 'value');
    res.send('Cookie Set in Browser');
    console.log('Cookies: Set: ' + req.cookies);
});

app.get('/clearCookie', (req, res) => {
    console.log("Cookies: Clear: " + req.cookies);
})

app.listen(5050);