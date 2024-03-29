const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Youtube")
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

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

const Playlist = new mongoose.model("Playlist", playlistSchema);

const getDocument = async () => {
  try {
    // documentation of comparison query operator
    // https://www.mongodb.com/docs/manual/reference/operator/query-logical/

    // const result = await Playlist.find({
    //   $or: [{ ctype: "frontend" }, { videos: 50 }],
    // });

    // const result = await Playlist.find({
    //   $or: [{ ctype: "frontend" }, { videos: 50 }],
    // }).select({ name: 1 });

    const result = await Playlist.find({
      $nor: [{ ctype: "frontend" }, { videos: 50 }],
    });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
