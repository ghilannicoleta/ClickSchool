import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1";

const client = new MongoClient(uri);
const productsDB = client.db("storeDB");
const productColection = productsDB.collection("products");

app.get("/products", async (req, res) => {
  const products = await productColection.find({}).toArray();
  res.send(products);
});

app.post("/products", async (req, res) => {
  const product = req.body;
  await productColection.insertOne(product);

  res.send({ ok: true });
});

app.post("/product/:id", async (req, res) => {
  const product = req.body;
  const id = req.params.id;

  if (!id) {
    return res.status(400).send("id este obligatoriu");
  }

  const productCurent = productColection.findOne({ _id: new ObjectId(id) });

  if (!productCurent) {
    return res.status(404).send("Produsul nu a fost gasit");
  }

  await productColection.updateOne(
    { _id: new ObjectId(id) },
    { $set: product }
  );

  res.send({ ok: true });
});

app.delete("/product/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  if (!id) {
    return res.status(400).send("ID is required");
  }
  try {
    const product = productColection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).send("The product can't be deleted");
    }
    await productColection.deleteOne({ _id: new ObjectId(id) });
  } catch (e) {
    console.log(e);
    return res.send({ ok: false });
  }
  res.send({ ok: true });
});

app.listen(3000, () => {
  console.log("app started on http://localhost:3000");
});
