const express = require("express");
const router = express.Router();

const hotelControllers = require("../controllers/hotelControllers")
const authentication = require("../middlewares/authentication")

router.post("/quartos", hotelControllers.quartos)
router.post("/checkin", hotelControllers.check_in)
router.post("/checkout", hotelControllers.check_out)

module.exports = router;