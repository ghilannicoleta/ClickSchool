import { MongoClient } from "mongodb";

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1";

async function run() {
  try {
    const client = new MongoClient(uri);

    await client.db("admin").command({ ping: 1 });

    let colections = await client
      .db("myNewDB")
      .collection("myCollection")
      .insertOne({ id: 5 });

    console.log(colections);

    await console.log("Connected successfully to server");
  } catch (e) {
    console.log(e);
  }
}

run().catch(console.dir);
