const router = require("express").Router();
const bookRoutes = require("./books");

const uploadFileRoutes = require("./uploadfile");

// Book routes
router.use("/books", bookRoutes);

// Book routes
router.use("/fileupload", uploadFileRoutes);

module.exports = router;
