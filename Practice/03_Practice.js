// Write a node js code with timer event that need to print your nicname and fav color after every 5 seconds and stops after 10 sec

let id = setInterval(() => {
	console.log("lol");
}, 5000);

setTimeout(()=>{
    clearInterval(id);
}, 11000);

// setInterval and setTimeout returns an id which can be used to refer to the timer.

// We can use clearInterval function end the interval or timeout with the given id.