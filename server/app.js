const express = require("express");
const connectToDatabase = require("./database/controllers/connectionDB.js");
const app = express();
const uploadSongRoute= require("./routes/uploadSongRoute.js");
const getBufferRoute= require("./routes/getBufferRoute.js");
const addUserRoute= require("./routes/addUserRoute.js");
const toggleSongLikeRoute= require("./routes/toggleSongLikeRoute.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

connectToDatabase();

// app.get("/", (req, res) => {
//   res.send("index.html");
// });

app.use('/upload', uploadSongRoute);
app.use('/get-buffer', getBufferRoute);
app.use('/create-user', addUserRoute);
app.use('/toggle-song-like', toggleSongLikeRoute);

app.listen(3080, () => {
  console.log(`Server live at http://127.0.0.1:3080`);
});
