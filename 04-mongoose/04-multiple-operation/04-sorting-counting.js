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
    // counting
    const countingResult = await Playlist.find({
      $or: [{ ctype: "frontend" }, { videos: 50 }],
    })
      .select({ name: 1 })
      .countDocuments();

    const sortingResult = await Playlist.find()
      .sort("name")
      .select({ name: 1 });

    const sortingResultAscending = await Playlist.find()
      .sort({ name: 1 })
      .select({ name: 1 });

    const sortingResultDescending = await Playlist.find()
      .sort({ name: -1 })
      .select({ name: 1 });

    console.log("Counting Result:", countingResult);
    console.log("Sorting Result:", sortingResult);
    console.log("Ascending Sorting Result:", sortingResultAscending);
    console.log("Descending Sorting Result:", sortingResultDescending);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
