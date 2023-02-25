import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

let products = [
  { productName: "eggs", quantity: "10", quantityType: "unit", id: 1 },
  { productName: "meat", quantity: "1", quantityType: "kilo", id: 2 },
  { productName: "milk", quantity: "1", quantityType: "unit", id: 3 },
  { productName: "juice", quantity: "2", quantityType: "unit", id: 4 },
  { productName: "fish", quantity: "1", quantityType: "kilo", id: 5 },
  { productName: "cheese", quantity: "300", quantityType: "grams", id: 6 },
];

app.get("/", function (req, res) {
  res.send("Hello World......");
});

app.get("/products", (req, res) => {
  res.send(products);
  //   console.log(products);
});

app.post("/products", (req, res) => {
  //   console.log(`post /products \n${JSON.stringify(req.body)}`);
  products.push(req.body);
  //   console.log(`ce sa adaugat in product ${JSON.stringify(products)}`);
  res.status(200).send("Successfully added");
});

app.delete("/products", (req, res) => {
  //   console.log(req.query.name);
  products = products.filter((product) => {
    return product.id != req.query.id;
  });

  res.send("Successfully delete");
});

app.listen(3001, () => {
  console.log("Listining on : http://localhost:3001");
});
