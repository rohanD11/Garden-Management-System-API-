const express = require("express");
const router = express.Router();
const authentcateUser = require("../middleware/authentication");

const {
  contact,
  serviceBooking,
  toolBuying,
} = require("../controllers/client");

router.route("/contact").post(authentcateUser, contact);
router.route("/service-booking").post(authentcateUser, serviceBooking);
router.route("/tool-buying").post(authentcateUser, toolBuying);
module.exports = router;
