import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

let products = [
  { productName: "eggs", quantity: "10", quantityType: "unit" },
  { productName: "meat", quantity: "1", quantityType: "kilo" },
  { productName: "milk", quantity: "1", quantityType: "unit" },
  { productName: "juice", quantity: "2", quantityType: "unit" },
  { productName: "fish", quantity: "1", quantityType: "kilo" },
  { productName: "cheese", quantity: "300", quantityType: "grams" },
];

app.get("/", function (req, res) {
  res.send("Hello World......");
});

app.listen(3001, () => {
  //   console.log("Listining on : http://localhost:3000");
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
    return product.productName !== req.query.name;
  });

  res.send("Successfully delete");
});
