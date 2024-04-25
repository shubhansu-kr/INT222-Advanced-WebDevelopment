// Import Libraries
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Pool } = require("pg");
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

app.post("/search", (req, res) => {
	MongoClient.connect(url)
		.then((db) => {
			var dbo = db.db("INT222");
            var seq = { marks: 1 };
            console.log(req.body);
			dbo.collection("Student_data")
				.find(req.body)
                .sort(seq)
				.toArray()
				.then((data) => {
					console.log(data);
					db.close();
					res.json(data);
				})
				.catch((err) => {
					console.error("An error occurred:", err);
				});
		})
		.catch((err) => {
			console.error(
				"An error occurred while connecting to MongoDB:",
				err
			);
		});
});

app.post("/delete", (req, res) => {
	MongoClient.connect(url)
		.then((db) => {
			var dbo = db.db("INT222");
			dbo.collection("Student_data")
				.deleteMany(req.body)
				.then((data) => {
					console.log(data);
					db.close();
					res.send(
						"Successfully deleted: " +
							data.deletedCount +
							" Documents <br/>"
					);
				})
				.catch((err) => {
					console.error("An error occurred:", err);
				});
		})
		.catch((err) => {
			console.error(
				"An error occurred while connecting to MongoDB:",
				err
			);
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


const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "2021",
	port: 5432,
});

app.get("/todos", (req, res) => {
	pool.query("SELECT * FROM todos", (error, result) => {
		if (error) {
			console.error("Error fetching todos", error);
			res.status(500).json({ error: "Internal server error" });
		} else {
			res.json(result.rows);
		}
	});
});

app.post("/todos", (req, res) => {
	const { title, completed } = req.body;
	pool.query(
		"INSERT INTO todos (title, completed) VALUES ($1, $2)",
		[title, completed],
		(error) => {
			if (error) {
				console.error("Error creating todo", error);
				res.status(500).json({ error: "Internal server error" });
			} else {
				res.status(201).json({ message: "Todo created successfully" });
			}
		}
	);
});

app.put("/todos/:id", (req, res) => {
	const { id } = req.params;
	const { title, completed } = req.body;
	pool.query(
		"UPDATE todos SET title = $1, completed = $2 WHERE id = $3",
		[title, completed, id],
		(error) => {
			if (error) {
				console.error("Error updating todo", error);
				res.status(500).json({ error: "Internal server error" });
			} else {
				res.json({ message: "Todo updated successfully" });
			}
		}
	);
});

