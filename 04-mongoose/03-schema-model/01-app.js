const mongoose = require("mongoose");

// connection is creted and if db present then ok elese created new database
mongoose
  .connect("mongodb://localhost:27017/Youtube")
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

// schema
// a mongoose schema defines the structure of document
// defaults values , validation etc

// schema define
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  data: {
    type: Date,
    default: Date.now,
  },
});

// a mongoose model is a wrapper on the mongoose schema.
// a mongoose schema defines the structures of the document,
//default values , validators etc ,
//whereas a mongoose model provides an interface to the database for
//creating, quering , updating , deleting  records etc

// collection creating
const Playlist = new mongoose.model("Playlist", playlistSchema); //(collection name , schema name)

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "nodeJs",
      ctype: "backend",
      videos: 50,
      author: "yogeshwar",
      active: true,
    });

    const result = reactPlaylist.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

createDocument();
