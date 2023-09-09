const multer = require ("multer");
const express = require ("express");
const Route= express.Router();
const { uploadToS3 } = require ("../s3-modules/uploadS3.js");
const { addMusicToDB } = require ("../database/controllers/musicDB.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploads = upload.fields([{ name: "music" }, { name: "thumbnail" }]);



Route.post("/", uploads, async (req, res) => {

  try {
    console.log("req.body = " ,req.body);
    const hash={
      musicHash: '',
      thumbnailHash: ''
    };
    const musicFile = req.files.music[0];
    hash.musicHash = await uploadToS3(musicFile);
    const imgFile = req.files.thumbnail[0];
    hash.thumbnailHash = await uploadToS3(imgFile);
    await addMusicToDB(req.body.music, hash);
  } catch (error) {
    console.log(`Error while uploading music: `,error.message);
  }

  res.status(200).send("Ohyeah");
});

module.exports = Route;
