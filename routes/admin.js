const express = require("express");
const router = express.Router();
const {
  login,
  getAllUsers,
  addLandScapeDesign,
  addProducts,
  addGardenServices,
  addGardenProjects,
  addGardenPlants,
} = require("../controllers/admin");
const authentcateUser = require("../middleware/authentication");
const auth = require("../middleware/authentication");

router.post("/login", login);
router.route("/users").get(authentcateUser, getAllUsers);
router.route("/landscape-designs").post(authentcateUser, addLandScapeDesign);
router.route("/add-products").post(authentcateUser, addProducts);
router.route("/services").post(authentcateUser, addGardenServices);
router.route("/projects").post(authentcateUser, addGardenProjects);
router.route("/plants").post(authentcateUser, addGardenPlants);

module.exports = router;
