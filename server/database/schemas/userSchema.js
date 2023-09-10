const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  uid: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  likedSongs: Array,
  uploadedSongs: Array,
  likedPlaylists: Array,
  
});

module.exports = mongoose.model("User", userSchema);
