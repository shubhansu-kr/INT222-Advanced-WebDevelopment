// Write a node.js using http and fs module to open read and write file in the browser.

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	console.log("File is open at localHost: 5000");
	fs.readFile("Dummy.txt", (err, data) => {
		if (err) console.log(err);
		res.write(data);
		res.end();
	});
}).listen(5000, () => {
	console.log("");
});
