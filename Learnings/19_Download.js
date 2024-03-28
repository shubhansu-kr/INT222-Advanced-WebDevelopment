const express = require("express");
const app = express();

const myName = (req, res, next) => {
	console.log("Middleware Started");
	next();
};

app.use(myName);

app.get("/", (req, res) => {
	res.send("Hello Middleware!");
});

app.get('/download', (req, res) => {
    try {
        res.download('index.js');
    } catch (err) {
        console.log(err);
    }
})
app.listen(5050);
