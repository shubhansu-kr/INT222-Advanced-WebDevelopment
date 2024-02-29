var fs = require("fs");
fs.open("dummy.txt", "w", function (err, file) {
    console.log(file, "HHHH");
	fs.readFile("dummy.txt", function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log("Printing Asynchronously:", data.toString());
	});
    fs.writeFile("dummy.txt", "This is content to write", function(err) {
        if (err) {
            console.log(err);
        }
    });
	if (err) throw err;
});
