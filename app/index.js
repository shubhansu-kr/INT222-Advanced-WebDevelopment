var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

console.log("Log2");
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
        return;
    }
    console.log("Connected to MongoDB");

    var dbo = db.db("Univ");
    dbo.createCollection("Student_data", function (err, res) {
        if (err) {
            console.error("Error creating collection:", err);
            db.close();
            return;
        }
        console.log("Collection created");
        db.close();
    });
});

