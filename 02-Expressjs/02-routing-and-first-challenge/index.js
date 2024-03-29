const express = require("express");
const { Server } = require("http");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("this is home page");
});
app.get("/aboutUS", (req, res) => {
  res.send("this is my about page");
});
app.get("/contactUS", (req, res) => {
  res.status(200).send("this is my contact page");
});

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
