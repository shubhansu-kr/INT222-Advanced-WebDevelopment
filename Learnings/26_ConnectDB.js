const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";

// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
// 	if (err) throw err;
// 	console.log("DB Created");
// 	db.close;
// });

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
	if (err) throw err;
	var dbo = db.db("Univ");
	var myobj = [
		{
			name: "Manoj",
			course: "Node js",
			marks: 98,
			Grade: "O",
			Mode: "Regular",
		},
		{ name: "Dhoni", course: "Node js", marks: 98 },
		{ name: "Anu", course: "React js", marks: 98 },
		{ name: "Ram", course: "HTML", marks: 98 },
		{ name: "Tej", course: "Angular js", marks: 98 },
		{
			name: "Manoj",
			course: "Node js",
			marks: 98,
			Grade: "O",
			Mode: "Regular",
		},
	];
	dbo.collection("Student_data").insertMany(myobj, function (err, data) {
		if (err) throw err;
		console.log("Number of documents inserted: " + data.insertedCount);
		db.close();
	});
});
