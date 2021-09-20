const express = require("express");
const router = express.Router();

const hotelControllers = require("../controllers/hotelControllers")
const authentication = require("../middlewares/authentication")

const hotelValidation = require("../validations/hotelValidations")

router.post("/quartos", hotelValidation.quartos , hotelControllers.quartos)
router.post("/checkin", hotelValidation.postCheckin , hotelControllers.check_in)
router.post("/checkout", hotelValidation.postCheckout, hotelControllers.check_out)

module.exports = router;