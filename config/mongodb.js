const { MongoClient } = require("mongodb");

let database = null;

async function connect() {
  try {
    const uri =
      "mongodb+srv://admin:2$dHa$x7TQiYP.d@cluster0.ontsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();
    const db = await client.db("asmaraku");
    database = db;
    return db;
  } catch (err) {
    console.log(err);
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  connect,
  getDatabase,
};
