const mongoose = require("mongoose");

// connection is creted and if db present then ok elese created new database
mongoose
  .connect("mongodb://localhost:27017/yogeshwar")
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => {
    console.log(err);
  });
