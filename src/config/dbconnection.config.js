const mongoose = require('mongoose');

const MONGO_DB_NAME=process.env.MONGO_DB_NAME;
const MONGO_USERNAME=process.env.MONGO_USERNAME;
const MONGO_SERVER=process.env.MONGO_SERVER;
const MONGO_PASSWORD=process.env.MONGO_PASSWORD;

// mongodb production uri
// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_SERVER}/${MONGO_DB_NAME}?retryWrites=true&w=majority`; // Replace with your MongoDB URI
 
// local mongodb uri
const uri = `mongodb://localhost:27017/${MONGO_DB_NAME}`;

async function connectToDatabase() {
   
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // const db = client.db(MONGO_DB_NAME);
        // return db;

    } catch (err) {
        console.error(err);
    }
}

module.exports = connectToDatabase;