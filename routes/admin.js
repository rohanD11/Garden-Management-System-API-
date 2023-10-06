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
  getAllProducts,
  getAllServices,
  getAllPlants,
  getContacts,
  getServiceBooking,
} = require("../controllers/admin");
const authentcateUser = require("../middleware/authentication");
const auth = require("../middleware/authentication");

router.post("/login", login);
router.route("/users").get(authentcateUser, getAllUsers);
router.route("/landscape-designs").post(authentcateUser, addLandScapeDesign);
router
  .route("/add-products")
  .post(authentcateUser, addProducts)
  .get(authentcateUser, getAllProducts);

router
  .route("/services")
  .post(authentcateUser, addGardenServices)
  .get(authentcateUser, getAllServices);
router.route("/projects").post(authentcateUser, addGardenProjects);
router
  .route("/plants")
  .post(authentcateUser, addGardenPlants)
  .get(authentcateUser, getAllPlants);
router.route("/contact").get(authentcateUser, getContacts);
router.route("/service-booking").get(authentcateUser, getServiceBooking);
module.exports = router;
