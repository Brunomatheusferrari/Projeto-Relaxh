const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/userControllers");

const usuarioValidations = require("../validations/userValidations");

const authentication = require("../middlewares/authentication")

router.post("/create", usuarioValidations.post, usersControllers.create);
router.get("/", authentication(["guest", "admin", "user"]),usuarioValidations.get, usersControllers.getUser)
router.put("/edit", authentication(["guest", "admin", "user"]), usuarioValidations.put, usersControllers.editUser)
router.delete("/delete", authentication(["guest", "admin", "user"]),usuarioValidations.delete , usersControllers.deleteUser)
router.post("/reserve", authentication(["guest", "admin", "user"]),usuarioValidations.postReserva ,usersControllers.reserve)

module.exports = router;