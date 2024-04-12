//const { Result } = require('express-validator');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/KM025";
MongoClient.connect(url)
	.then((db) => {
		var dbo = db.db("Univ");
		var seq = { marks: 1 }; //ascending order
		dbo.collection("Student_data")
			.find()
			.sort(seq)
			.toArray()
			.then((data) => {
				console.log(data);
				db.close();
			})
			.catch((err) => {
				console.error("An error occurred:", err);
			});
	})
	.catch((err) => {
		console.error("An error occurred while connecting to MongoDB:", err);
	});
