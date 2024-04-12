const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url).then(
        () => {
            console.log("Successfully connected to DB");
        }
    ).catch((err) => {
        console.log("Error Connecting to the DB", err);
        process.exit(1);
    });
};

module.exports = { connectDB };
