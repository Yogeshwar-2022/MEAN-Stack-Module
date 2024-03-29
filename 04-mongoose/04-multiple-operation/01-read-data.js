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
    // const result = await Playlist.find();
    // const result = await Playlist.find({ ctype: "frontend" });
    // const result = await Playlist.find({ ctype: "frontend" }).select({name:1});
    const result = await Playlist.find({ ctype: "frontend" })
      .select({ name: 1 })
      .limit(1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
