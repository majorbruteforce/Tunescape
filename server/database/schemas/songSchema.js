const mongoose= require('mongoose');

const songSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    musicHash: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt:{
        type: Date,
        default: ()=> Date.now()
    },
    thumbnailHash: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: String,
        immutable: true       
    },
    uid: {
        type: String,
        immutable: true
    },
    plays: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: [String]
    }

});


module.exports= mongoose.model("Song", songSchema);