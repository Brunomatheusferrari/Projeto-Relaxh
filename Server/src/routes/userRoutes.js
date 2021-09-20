const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/userControllers");

const usuarioValidations = require("../validations/userValidations");

router.post("/create", usuarioValidations.post, usersControllers.create);
router.put("/edit", usuarioValidations.put, usersControllers.editUser)
router.get("/", usuarioValidations.get, usersControllers.getUser)
router.delete("/delete", usuarioValidations.delete , usersControllers.deleteUser)
router.post("/reserve", usuarioValidations.postReserva ,usersControllers.reserve)

module.exports = router;