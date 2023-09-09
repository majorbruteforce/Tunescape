import multer from "multer";
import express from "express";
import {uploadToS3} from "../s3-modules/upload-to-s3.js";
import { addSongToDB } from "../database/controllers/music.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploads= upload.fields([{name: 'music'},{name: 'thumbnail'}]);


Route.post("/upload", uploads, async (req,res)=>{

      try {
          
    const hash= {};
    const songFile= req.file.song[0];
    hash.song= await uploadToS3(songFile);
    
    
    const imgFile= req.file.thumbnail[0];
    hash.thumbnail= await uploadToS3(imgFile);

    
    await addSongToDB(req.body);





});

