const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Youtube")
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

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

// collection creating
const Playlist = new mongoose.model("Playlist", playlistSchema); //(collection name , schema name)

const createDocument = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: "Js",
      ctype: "full-stack",
      videos: 50,
      author: "yogeshwar",
      active: true,
    });

    const nodePlaylist = new Playlist({
      name: "nodeJs",
      ctype: "backend",
      videos: 50,
      author: "yogeshwar",
      active: true,
    });

    const expressPlaylist = new Playlist({
      name: "expressJs",
      ctype: "frontend",
      videos: 50,
      author: "yogeshwar",
      active: true,
    });

    const javaPlaylist = new Playlist({
      name: "java",
      ctype: "backend",
      videos: 50,
      author: "yogeshwar",
      active: true,
    });

    const pythonPlaylist = new Playlist({
      name: "python",
      ctype: "backend",
      videos: 50,
      author: "yogeshwar",
      active: true,
    });

    const result = await Playlist.insertMany([
      jsPlaylist,
      nodePlaylist,
      expressPlaylist,
      javaPlaylist,
      pythonPlaylist,
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

createDocument();
