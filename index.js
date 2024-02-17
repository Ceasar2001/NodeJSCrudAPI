const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
//this will allow you to add products using form URL in POSTMAN
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello NODE AsPI");
});

//DATABASE CONFIGURATIONS
mongoose
  .connect(
    "mongodb+srv://ceasar:Ciie200103@cluster0.c02rdx6.mongodb.net/Node-CRUD?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
