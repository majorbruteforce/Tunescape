const express = require("express");
const Route = express.Router();
const {getBuffer}= require("../database/controllers/musicDB.js");


Route.get('/',async(req,res)=>{
    console.log("request from client!")
    const songs= await getBuffer(parseInt(req.query.number));
    res.json(songs);
});

module.exports= Route;