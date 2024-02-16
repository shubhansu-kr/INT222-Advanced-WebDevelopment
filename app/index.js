// First HTTP server in NodeJS
require('dotenv').config();
const http = require('http');

const hostName = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 5050;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World - Server');
});

server.listen(port, hostName, ()=>{
    console.log(`Server is listening to http://${hostName}:${port}`);
})