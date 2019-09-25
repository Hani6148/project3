
// app.use(express.static("public"));

 

// app.post('/upload', function (req, res, next)   {
//   let uploadFile = req.files.file
//   const fileName = req.files.file.name
//   console.log("file loading..",`${__dirname}/client/public/files/${fileName}`)

//   uploadFile.mv(
//     `${__dirname}/client/public/files/${fileName}`,
//     function (err) {
//       if (err) {
//         return res.status(500).send(err)
//       }

//       res.json({
//         file: `${req.files.file.name}`,
//       })
//     },
//   )
// })




// Defining methods for the booksController
module.exports = {
    upload:  function (req, res, next)   {
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
    }
};
