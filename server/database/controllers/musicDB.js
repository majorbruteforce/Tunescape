const mongoose= require("mongoose");
const Song= require("../schemas/songSchema.js");

  
async function addMusicToDB(music,hash){
    
    try{
        console.log(music)
        const newSong= new Song({
            title: music.title,
            artist: music.artist,
            uploadedBy: music.uploadedBy,
            uid: music.uid,
            thumbnailHash: hash.thumbnailHash,
            musicHash: hash.musicHash
        })
        console.log("newSong = " + newSong);
        await newSong.save();
        console.log(`${hash.musicHash}/${music.uid} uploaded successfully.`)
    }catch(err){
        console.log(`Error uploading ${hash.musicHash}/${music.uid} to database: `, err.message);
        console.log(err.message);
    }

}

async function getBuffer(number){
    const results= await Song.aggregate([{$sample: {size: number}}]);
    return results;
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
    getBuffer
}

