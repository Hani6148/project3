const express = require("express");
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser())
app.use(fileUpload())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 
// app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'))

app.post('/upload', function (req, res, next)   {
  let uploadFile = req.files.file
  const fileName = req.files.file.name
  console.log("file loading..",`${__dirname}/client/public/files/${fileName}`)

  uploadFile.mv(
    `${__dirname}/client/public/files/${fileName}`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }

      res.json({
        file: `${req.files.file.name}`,
      })
    },
  )
})

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
