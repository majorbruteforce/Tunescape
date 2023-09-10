const express = require("express");
const Route = express.Router();
const { createUser } = require("../database/controllers/userDB.js");


Route.post('/',async (req,res)=>{
    console.log(req.body)
    await createUser(req.body);
    res.send("User created");
})

module.exports= Route;