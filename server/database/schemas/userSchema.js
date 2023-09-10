const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likedSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  uploadedSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  likedPlaylists: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
