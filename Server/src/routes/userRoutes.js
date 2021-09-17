const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/userControllers")
const authentication = require("../middlewares/authentication")

router.post("/create", usersControllers.create);
router.post("/reserve", usersControllers.reserve)
router.put("/edit", usersControllers.editUser)
router.get("/", usersControllers.getUser)
router.delete("/delete", usersControllers.deleteUser)

module.exports = router;