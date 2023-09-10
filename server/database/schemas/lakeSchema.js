const mongoose = require("mongoose");
const Playlist= require("./playlistSchema.js");

const lakeSchema = new mongoose.Schema({
  ownerUID: {
    type: String,
    required: true,
  },
  playlists: {
    type: [Playlist.schema],
    default: [],
  },
});

module.exports= mongoose.model("Lake",lakeSchema);