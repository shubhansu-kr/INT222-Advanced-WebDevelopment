// Node Js is a event driven programming env.

console.log("Hello World");
setTimeout(() => {
	console.log("Inside Timer");
}, 3000);
console.log("Outside timeout");

// OutPut:
/* 
Hello World
Outside timeout
Inside Timer
*/

var event = require("events");

var myEmitter = new event.EventEmitter();
myEmitter.on("anEvent", function a(msg) {
	console.log(msg);
});

var func1 = (msg) => {
	console.log("Func", msg);
};

console.log(
	"Default max listener for myEmitter is: ",
	myEmitter.getMaxListeners()
);
myEmitter.emit("anEvent", "I am an emmiter");
myEmitter.emit("anEvent", "I am an emmiter1");
myEmitter.emit("anEvent", "I am an emmiter2");
// myEmitter.emit("anEvent", func1("I am an emmiter3"));

myEmitter.removeListener('anEvent', func1);
