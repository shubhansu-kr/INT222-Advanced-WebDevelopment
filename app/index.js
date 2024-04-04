const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/public/" + "soc.html");
	// res.send('Hello I am in Socket.io')
});
io.on("connection", function (socket) {
	console.log("A user connected");
	socket.on("disconnect", function () {
		console.log("A user disconnected");
	});
});
http.listen(2000, function () {
	console.log("listening on localhost:2000");
});

/* 
index.html: 

<!DOCTYPE html> 
<html> 
   <head> 
      <title>Hello world</title> 
   </head> 
   <script src = "/socket.io/socket.io.js"></script> 
      <script> 
      var socket = io(); 
   </script> 
   <body>Hello world</body> 
</html>

*/