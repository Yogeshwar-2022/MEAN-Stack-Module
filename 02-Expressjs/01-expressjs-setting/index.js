const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from express here is yogeshwar ");
});

app.get("/about", (req, res) => {
  res.send("hello form about ");
});

app.listen(8000, () => {
  console.log("listening the port at 8000");
});
