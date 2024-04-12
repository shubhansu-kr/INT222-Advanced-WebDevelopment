const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";
MongoClient.connect(url)
	.then((client) => {
		const db = client.db("INT222");
		db.createCollection("Student_data")
			.then((res) => {
				console.log("Collection created");
				client.close();
			})
			.catch((err) => {
				throw err;
			});
	})
	.catch((err) => {
		throw err;
	});
