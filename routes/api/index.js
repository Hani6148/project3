const router = require("express").Router();
const bookRoutes = require("./books");

const usersRoutes = require("./users");

const uploadFileRoutes = require("./uploadfile");


// Book routes
router.use("/users", usersRoutes);

// Book routes
router.use("/books", bookRoutes);

// Book routes
router.use("/fileupload", uploadFileRoutes);

module.exports = router;
