const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabse() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You mush connect first!");
  }
  return database;
}

module.exports = {
  connectToDatabse: connectToDatabse,
  getDb: getDb,
};
