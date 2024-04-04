const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "chat1.html");
});
users = [];
io.on("connection", function (socket) {
	//npm install --save socket.io
	console.log("A user connected");
	socket.on("createUser", function (data) {
		console.log(data);
		if (users.indexOf(data) >= 0) {
			socket.emit("userExists", data + " user already exists");
		} else {
			users.push(data);
			socket.emit("setUser", { username: data });
		}
	});
	socket.on("msg", function (data) {
		io.emit("newmsg", data);
	});
	socket.on("disconnect", function () {
		console.log("A user disconnected");
	});
});
http.listen(2000, function () {
	console.log("listening on localhost:2000");
});

/* 
chat1.html: 

<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Chat Room</title> 
<script src="/socket.io/socket.io.js"></script> 
</head> 
<body> 
Name: <input type="text" id="name"><br /> 
Age: <input type="number" id="age"><br /> 
<button onclick="createUser()">Create User</button> 
<div id="error-container" style="color: red; font-size: larger;"></div> 
<script> 
var user; 
var socket=io(); 
function createUser(){ 
var age=document.getElementById('age').value; 
if(age>18){ 
socket.emit('createUser',document.getElementById('name').value+"__"+document.getElementById('age').value+" : ");} 
else{ 
document.getElementById('error-container').innerHTML="Age is less than 18";} 
}; 
socket.on('userExists',function(data){ 
document.getElementById('error-container').innerHTML=data; 
}); 
socket.on('setUser',function(data){ 
user=data.username; 
document.body.innerHTML='<textarea id="message" rows=5 cols=20></textarea>\ 
<button onclick="sendMessage()">Send</button>\ 
<div id="message-container"></div>'; 
}); 
function sendMessage(){ 
var msg=document.getElementById('message').value; 
if(msg){ 
socket.emit('msg',{message:msg, user: user}); 
} 
} 
socket.on('newmsg',function(data){ 
if(user){ 
document.getElementById('message-container').innerHTML += '<div><b>' + data.user + data.message + '</div>'; 
} 
}) 
</script> 
</body> 
</html>

*/
