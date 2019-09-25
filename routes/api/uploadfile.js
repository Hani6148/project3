const router = require("express").Router();
const fileUploadController = require("../../controllers/fileUploadController");
// Matches with "/api/books"
router.route("/")
  .post(fileUploadController.upload);

  module.exports = router;