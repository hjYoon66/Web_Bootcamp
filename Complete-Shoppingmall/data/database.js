const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb://0.0.0.0:27017");
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You mush connect first!");
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
