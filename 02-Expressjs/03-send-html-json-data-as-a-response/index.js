// how to send html and json data by response using expressjs

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.write("<h1>this is home page</h1>");
  res.write("<h1>and in this way i send html page as response</h1>");
  res.send();
});
app.get("/aboutUS", (req, res) => {
  res.send("this is my about page");
});
app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "yogeshwar",
      age: 20,
    },
    {
      id: 1,
      name: "yogeshwar",
      age: 20,
    },
    {
      id: 1,
      name: "yogeshwar",
      age: 20,
    },
  ]);
});
app.get("/contactUS", (req, res) => {
  res.status(200).send("this is my contact page");
});

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
