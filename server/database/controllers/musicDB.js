const mongoose= require("mongoose");
const Song= require("../schemas/songSchema.js");

  
async function addMusicToDB(music,hash){
    
    try{
        const newSong= new Song({
            title: music.title,
            artist: music.artist,
            uploadedBy: music.uploadedBy,
            uid: music.uid,
            duration: music.duration,
            thumbnailHash: hash.thumbnailHash,
            musicHash: hash.musicHash
        })
        console.log("newSong = " + newSong);
        await newSong.save();
        console.log(`${hash.musicHash}/${music.uid} uploaded successfully.`)
    }
    catch(err){
        console.log(`Error uploading ${hash.musicHash}/${music.uid} to database: `, err.message);
        console.log(err.message);
    }

}

async function getBuffer(number){
    const results= await Song.aggregate([{$sample: {size: number}}]);
    return results;
}


async function toggleSongLikes(songID, userID){
    const song= await Song.findById(songID);
    if (!song){
        console.log(`Song ${songID} not found while toggling like.`);
        return 0;
    }

    const indexOfUser= song.likedBy.indexOf(userID);
    try
    
    {
        if (indexOfUser == -1){
        Song.updateOne({ _id: songID }, { $push: { likedBy: userID }}).then(()=>{
            return 1;
        })
    }
    else{
        Song.updateOne({ _id: songID }, { $pull: { likedBy: userID } }).then(
          () => {
            return 1;
          }
        );
    }
     
    return 1;
    }catch(err){
        console.log(err);
        return 0;
    }

}


// async function incrementLikes(songID){
//     console.log(songID);

//     const updatedSong= await Song.findByIdAndUpdate(
//         songID,
//         {$inc: {likes: 1}},
//         {new: true}

//     )

//     return updatedSong.likes;
// }
// async function incrementPlays(songID){

//     const updatedSong= Song.findByIdAndUpdate(
//         songID,
//         {$inc: {plays: 1}},
//         {new: true}

//     )

//     return updatedSong.plays;
// }

module.exports= {
    addMusicToDB,
    getBuffer,
    toggleSongLikes
}

