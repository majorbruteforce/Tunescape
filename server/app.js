const express = require("express");
const connectToDatabase = require("./database/controllers/connectionDB.js");
const app = express();
const uploadRoute= require("./routes/uploadRoute.js")
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

connectToDatabase();

app.get("/", (req, res) => {
  res.send("index.html");
});

app.use('/upload',uploadRoute);

app.listen(3080, () => {
  console.log(`Server live at http://127.0.0.1:3080`);
});
