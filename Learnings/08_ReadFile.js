const fs = require("fs");
const path = require('path');

let filePath = path.join(__dirname, './../dummy.txt');

try {
	const data = fs.readFileSync(filePath);
	console.log(data);

    // Output: <Buffer 41 4b 20 53 48 49 54 20 41 20 53 4f 20 49 4e 54 45 4c 4c 49 47 45 4e 54 20 52 41 53 20 54 4f 20 47 49 20>

    // Node Js provides buffer class to store raw data.
    // Buffer is a temp memory storage which stores the data which is being moved from one place to another.

    // alloc(number, fill, coding);
    const buffer = Buffer.alloc(5, 'hello', 'utf-8');
    console.log(buffer);

    // To convert the buffer to string, toString method is used. 
    console.log(data.toString());

} catch (err) {
	console.log(err);
}
