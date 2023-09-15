const User = require("../schemas/userSchema.js");
const mongoose = require("mongoose");

async function createUser(user) {
  try {
    const newUser = new User({
      displayName: user.displayName,
      userID: user.userID,
    });

    await newUser.save();
    console.log(`User ${user.displayName}/${user.userID} created successfully`);
  } catch (err) {
    console.log(`Error creating user ${user.displayName}/${user.userID}`);
    console.log(err.message);
  }
}

// async function updateUser(){

// }

async function toggleUserLikedSongs(songID, userID) {
  try {
    const user = await User.findById(Object(userID));

    if (!user) {
      console.log(`User ${userID} not found while toggling liked songs.`);
      return 0;
    }

    const indexOfLikedSong = user.likedSongs.indexOf(songID);

    if (indexOfLikedSong == -1) {
      User.updateOne({ _id: userID }, { $push: { likedSongs: songID } }).then(
        () => {
          
          return 1;
        }
      );
    } else {
      User.updateOne({ _id: userID }, { $pull: { likedSongs: songID } }).then(
        () => {
          
          return 1;
        }
      );
    }

  } catch (err) {
    console.log(err.message);
    return 0;
  }
}

module.exports = {
  toggleUserLikedSongs,
  createUser,
};
