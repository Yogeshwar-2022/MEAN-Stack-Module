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

// update document

const deleteDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

deleteDocument("65e5d38468b84223b325ea84");
