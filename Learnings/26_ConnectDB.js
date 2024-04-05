const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/Univ';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    console.log('DB Created');
    db.close;
});