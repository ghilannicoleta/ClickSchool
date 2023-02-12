import express from "express";
const app = express();

const products = [
  { productName: "egss", quantity: "10", quantityType: "unit" },
  { productName: "meat", quantity: "1", quantityType: "kilo" },
  { productName: "milk", quantity: "1", quantityType: "unit" },
  { productName: "juice", quantity: "2", quantityType: "unit" },
  { productName: "fish", quantity: "1", quantityType: "kilo" },
  { productName: "cheese", quantity: "300", quantityType: "grams" },
];

console.log(products);
