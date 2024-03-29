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

const updateDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "JavaScript",
        },
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

updateDocument("65e5d38468b84223b325ea80");
