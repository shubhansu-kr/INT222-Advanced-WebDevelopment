const fs = require("fs");

fs.open("Dummy.txt", (err) => {
	if (err) throw err;
	fs.readFile("Dummy.txt", (err, data) => {
		if (err) throw err;

		if (data.toString().trim().length == 0) {
			console.log("File is empty");
		} else {
			console.log("Print: ", data.toString().trim());
		}
	});
});
