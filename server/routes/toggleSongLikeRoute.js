const express = require("express");
const Route = express.Router();
const { toggleSongLikes } = require("../database/controllers/musicDB.js");
const { toggleUserLikedSongs } = require("../database/controllers/userDB.js");


Route.patch('/',async (req,res)=>{
    
    const songID= req.body.songID;
    const userID= req.body.userID;
    const songSuccess= await toggleSongLikes(songID,userID);
    const userSuccess= await toggleUserLikedSongs(songID,userID);

    // return songSuccess && userSuccess ;
    res.send(userSuccess.toString());
})

module.exports= Route;