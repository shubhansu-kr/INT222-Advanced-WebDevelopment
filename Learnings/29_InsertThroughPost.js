Server: var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "insert.html");
});
app.post("/insert", (req, res) => {
	MongoClient.connect(url).then((db) => {
		var dbo = db.db("Univ");
		dbo.collection("Student_data")
			.insertOne(req.body)
			.then((data) => {
				console.log("Inserted data:" + data);
				db.close();
				res.send("Insert Successful");
			})
			.catch((err) => {
				console.error("An error occurred:", err);
			})
			.catch((err) => {
				console.error("An error occurred in connecting DB:", err);
			});
	});
});
app.listen(2000, () => {
	console.log("Visit localhost 2000");
});

// Client: 
// <!doctype html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Client Data</title>
// </head>
// <body style="background-color: antiquewhite;">
//   <h1>Enter Student_data</h1>
//     <form method="POST" action="/insert">
//       Name : <input type="text" name="name" class="color"> <br><br>
//       Course: <input type="text" name="course" class="color"> <br><br>
//       marks: <input type="text" name="marks" class="color"> <br><br>
//          <input type="submit">
//     </form>
// </body>
// </html>


/* 

// Import Libraries
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");

// Import Modules
// const { connectDB } = require("./db/connect");
// const { disconnectDB } = require("./db/disconnect");

// Configure Env Variables.
dotenv.config();
const port = process.env.PORT || 5500;
// const mongoURI = process.env.MONGO_URI;
const live = process.env.LIVE;

const publicDirectoryPath = path.join(__dirname, "public");

// Get an instance of express.
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the root
const url = "mongodb://127.0.0.1:27017/INT222";

app.get("/", (req, res) => {
	res.status(200).sendFile(path.join(publicDirectoryPath, "result.html"));
});

app.post("/insert", (req, res) => {
	MongoClient.connect(url).then((db) => {
		var dbo = db.db("INT222");
		dbo.collection("Student_data")
			.insertOne(req.body)
			.then((data) => {
				console.log("Inserted data:" + data);
				db.close();
				res.send("Insert Successful");
			})
			.catch((err) => {
				console.error("An error occurred:", err);
			})
			.catch((err) => {
				console.error("An error occurred in connecting DB:", err);
			});
	});
});

// Router
// app.use("/user/auth", userAuthRouter);
// app.use("/drop", authenticate, dropRouter);
// app.use("/log", authenticate, logRouter);
// app.use("/public", publicRouter);

const start = async () => {
	try {
		// Check if required environment variables are set

		// if (!mongoURI) {
		// 	console.error("MONGO_URI environment variable is not set.");
		// 	process.exit(1);
		// }

		// await connectDB(mongoURI);

		app.listen(port, () => {
			console.log(`Server is listening to port ${port} happily`);
			console.log(`GO Live: ${live}${port}/`);
		});
	} catch (error) {
		console.error("Error starting the server:", error);
		process.exit(1);
	}
};

start();

// ShutDown on SIGINT signal.
process.on("SIGINT", () => {
	console.log("Shutting down gracefully");

	// try {
	// 	disconnectDB();
	// } catch (err) {
	// 	console.log("Error disconnecting mongoDB", err);
	// }

	process.exit(0);
});


*/