const express = require("express");
const connectToDatabase = require("./database/controllers/connectionDB.js");
const app = express();
const uploadSongRoute= require("./routes/uploadSongRoute.js");
const getBufferRoute= require("./routes/getBufferRoute.js");
const addUserRoute= require("./routes/addUserRoute.js");
const toggleSongLikeRoute= require("./routes/toggleSongLikeRoute.js");
const cors = require("cors");
const PORT= 3000;
app.use(cors());
app.use(express.json());
// app.use(express.static('public'));

connectToDatabase();
app.get('/',(req,res)=>{
  res.send("hi");
})
app.use('/upload', uploadSongRoute);
app.use('/get-buffer', getBufferRoute);
app.use('/create-user', addUserRoute);
app.use('/toggle-song-like', toggleSongLikeRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is live`);
});
