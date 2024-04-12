var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
MongoClient.connect(url).then((client) => {
	var dbo = client.db("INT222");
	var request = { course: "Node js" };
	var newdata = { $set: { course: "Java", marks: 70 } };
	dbo.collection("Student_data")
		.updateMany(request, newdata)
		.then((result) => {
			console.log("Number of documents updated: " + result.modifiedCount);
			console.log(result);
			process.exit();
		})
		.catch((err) => {
			console.error("An error occurred:", err);
		})
		.catch((err) => {
			console.error("An error occurred:", err);
		});
});
