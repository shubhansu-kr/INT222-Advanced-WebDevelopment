try {
	const prompt = require("./../app/controllers/getInput");
	let num1 = prompt("Enter num1: ");
	let num2 = prompt("Enter num2: ");

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	// Now put check on integer
	if (isNaN(num1) || isNaN(num2)) {
		console.log("Enter A valid Number");
		process.exit(1);
	}
	console.log(num1 + num2);
} catch (err) {
	console.log(err);
}
