var express = require('express'); 
var app = express(); 
var http = require('http').createServer(app); 
var io = require('socket.io')(http); 
app.get('/', function(req, res) { 
   res.sendFile( __dirname + "/" + "index3.html" );  
}); 
io.on('connection', function(socket) { 
   socket.on('clientEvent', function(data) { 
      console.log(data); 
   }); 
}); 
http.listen(3000, function() { 
   console.log('listening on localhost:3000'); 
});

/* 
<!DOCTYPE html> 
<html> 
   <head> 
      <title>Hello world</title> 
   </head> 
   <script src = "/socket.io/socket.io.js"></script> 
      <script> 
      var socket = io(); 
setInterval(() => { 
  socket.emit('clientEvent', 'hey server'); // the object will be serialized for you 
}, 1000); 
   </script> 
   <body>Hello world</body> 
</html>

*/