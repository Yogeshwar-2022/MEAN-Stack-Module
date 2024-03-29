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
    // https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

    // const result = await Playlist.find({ videos: { $gt: 50 } });
    // const result = await Playlist.find({ videos: { $lt: 50 } });
    // const result = await Playlist.find({ videos: { $lte: 50 } });
    const result = await Playlist.find({ videos: { $in: [30, 70] } });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
