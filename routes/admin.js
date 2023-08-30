const express = require("express");
const router = express.Router();
const { login,getAllUsers,addLandScapeDesign} = require("../controllers/admin");
const authentcateUser=require("../middleware/authentication")

router.post("/login", login);
router.route("/users").get(authentcateUser,getAllUsers);
router.route("/landscape-designs").post(authentcateUser,addLandScapeDesign)

module.exports = router;
