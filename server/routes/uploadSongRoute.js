const multer = require ("multer");
const express = require ("express");
const Route= express.Router();
const { uploadToS3 } = require ("../s3-modules/uploadS3.js");
const { addMusicToDB } = require ("../database/controllers/musicDB.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploads = upload.fields([{ name: "music",maxCount:1}, { name: "thumbnail",maxCount:1 }]);

Route.post("/", uploads, async (req, res) => {
  console.log("Connection++");
  try {
    const hash={
      musicHash: '',
      thumbnailHash: ''
    };
    const imgFile = req.files.thumbnail[0];
    console.log("imgFile::",imgFile);
    hash.thumbnailHash = await uploadToS3(imgFile);
    const musicFile = req.files.music[0];
    console.log("musicFile::",musicFile);
    hash.musicHash = await uploadToS3(musicFile);
    console.log("req.body = " ,req.body);
    await addMusicToDB(req.body, hash);
  } catch (error) {
    console.log(`Error while uploading music: `,error.message);
  }

  res.status(200).send(JSON.stringify(req.body));
});

module.exports = Route;
