var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "add.html");
});
app.get("/calc", function (req, res) {
	var num1 = parseInt(req.query.fn);
	var num2 = parseInt(req.query.sn);

	console.log(req.query);
	var response = 0;
	parseInt(req.query.fn) + parseInt(req.query.sn);

	switch (req.query.option) {
		case "option1":
			response = num1 + num2;
			break;

		case "option2":
			response = num1 - num2;

			break;

		case "option3":
			response = num1 * num2;

			break;

		case "option4":
			response = num1 / num2;

			break;

		default:
			response = 0;
			break;
	}

	response = response.toString();
	res.send("The result of The Numbers: " + response);
	res.end();
});

app.listen(2000, function (err) {
	if (err) console.log(err);
	console.log("Server started");
});
