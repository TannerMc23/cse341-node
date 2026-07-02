require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('cse341');
    console.log('Connected to MongoDB');
  }
  return db;
}

module.exports = connectDB;