const path = require("path");
const express = require("express");
const { Server } = require("http");
const app = express();
const port = 3000;

// console.log(__dirname);
// console.log(path.join(__dirname, "../04-whole-static-webpage-serve"));
const staticPath = path.join(__dirname, "../04-whole-static-webpage-serve");

// built in middleware
app.use(express.static(staticPath));

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
