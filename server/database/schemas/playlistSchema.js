const mongoose= require("mongoose");

const playlistSchema= new mongoose.Schema({

    playlistTitle:{
        type: String,
        required: true
    },
    musicHashes: {
        type: Array
    },
    private: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        immutable: true,
        default:Date.now
    },
    updatedAt: {
        type: Date,
        default:Date.now
    },
    likedBy: {
        type: [String]
    }

})

module.exports= mongoose.model("Playlist", playlistSchema);