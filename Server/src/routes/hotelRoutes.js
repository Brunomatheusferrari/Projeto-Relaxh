const express = require("express");
const router = express.Router();

const hotelControllers = require("../controllers/hotelControllers")
const authentication = require("../middlewares/authentication")

const hotelValidation = require("../validations/hotelValidations")

router.post("/quartos", authentication(["admin"]), hotelValidation.quartos , hotelControllers.quartos)
router.post("/checkin", authentication(["admin", "guest"]),hotelValidation.postCheckin , hotelControllers.check_in)
router.post("/checkout", authentication(["admin", "user"]),hotelValidation.postCheckout, hotelControllers.check_out)

module.exports = router;