const mongoose= require("mongoose");
const User= require("./database/schemas/userSchema.js");
const express= require("express");
const Route= express.Router();

Route.patch("/",async(req,res)=>{
    const userID= req.body.userID;
    const user= User.findById(userID);

    user.updateOne()
})
